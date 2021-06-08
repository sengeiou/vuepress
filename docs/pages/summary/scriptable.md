---
autoGroup-2: 趣味应用
title: Scriptable
date: 2021-05-14
isTimeLine: true
categories:
- Application
tags:
- Summary
---

### 1. iOS提醒事项同步到日历

<div class="smartideo">
 <div class="player">
  <iframe src="//player.bilibili.com/player.html?aid=884223998&bvid=BV1pK4y1Y7DX&cid=221125239&page=1&amp;high_quality=1&amp;danmaku=0" width="100%"  height="100%" frameborder="no" scrolling="no" allowfullscreen="allowfullscreen"> </iframe>
 </div>
</div>

**参考上面视频 [ :link: 终极解决方案！一键同步ios【提醒事项】到【日历】 ](https://www.bilibili.com/video/BV1pK4y1Y7DX?share_source=copy_web) up主的脚本修改，up主repo地址：[ :link: zackertypical / ios_script](https://github.com/zackertypical/ios_script)**

- **脚本一（推荐）：**
> 1. 修改了时间最小单位（当天精确到分钟，隔天精确到小时）   
> 2. 完成信息挪到了标题中，顺带去掉了底部的地图定位  
> 3. 尝试了几种替换掉identifier的方案，多多少少都会引入功能性的bug，只好牺牲美观性，在备注里保留identifier（更新的时候要用来校验过滤）了   
> 4. 其他细节更改见如下示例图

![](https://tva1.sinaimg.cn/large/008i3skNly1gqpcbinljgj30sw0k6n0b.jpg)   

![](https://tva1.sinaimg.cn/large/008i3skNly1gqpc23domvj30sw0k675n.jpg)   

![](https://tva1.sinaimg.cn/large/008i3skNly1gqpc3m3p9xj30sw0k675t.jpg)   

![](https://tva1.sinaimg.cn/large/008i3skNly1gqpc44hm6xj30sw0k63zv.jpg)   

![](https://tva1.sinaimg.cn/large/008i3skNly1gqpc4gsgo1j30sw0k6jsr.jpg)   

![](https://tva1.sinaimg.cn/large/008i3skNly1gqpc4p3vcrj30sw0k6jsq.jpg)   

![](https://tva1.sinaimg.cn/large/008i3skNly1gqpc50powfj30sw0k6abh.jpg)   

![](https://tva1.sinaimg.cn/large/008i3skNly1gqpc56y38vj30sw0k6dh1.jpg)

```js
//要同步的时间段，当前时间前后n个月，例如，当前为5月，设置为2时，同步时间段为3～7月
var dur_month = 2

const startDate = new Date()
startDate.setMonth(startDate.getMonth() - dur_month)
console.log(`日历的开始时间 ${startDate.toLocaleDateString()}`)

const endDate = new Date()
endDate.setMonth(endDate.getMonth() + dur_month)
console.log(`日历的结束时间 ${endDate.toLocaleDateString()}`)

const reminders = await Reminder.allDueBetween(startDate, endDate)
console.log(`获取 ${reminders.length} 条提醒事项`)

var calendar = await Calendar.forEvents()

//获取日历名和对应的日历
var m_dict = {}
for (cal of calendar) {
  m_dict[cal.title] = cal
  //console.log(`日历:${cal.title}`)
}

const events = await CalendarEvent.between(startDate, endDate, calendar)
console.log(`获取 ${events.length} 条日历`)
console.log(events)

for (const reminder of reminders) {
  reminder.notes =
    !reminder.notes || reminder.notes == null || reminder.notes == 'undefined'
      ? '无'
      : reminder.notes
  //reminder的标识符
  const targetNote = `[Reminder ID] ${reminder.identifier}`
  const [targetEvent] = events.filter((e) => e.notes != null && e.notes.indexOf(targetNote) != -1) //过滤重复的reminder
  if (!m_dict[reminder.calendar.title]) {
    console.warn('找不到日历' + reminder.calendar.title)
    continue
  }
  if (targetEvent) {
    //console.log(`找到已经创建的事项 ${reminder.title}`)
    updateEvent(targetEvent, reminder)
  } else {
    console.warn(`创建事项 ${reminder.title} 到 ${reminder.calendar.title}`)
    const newEvent = new CalendarEvent()
    newEvent.notes = reminder.notes + '\n\n' + targetNote //要加入备注
    updateEvent(newEvent, reminder)
  }
}

Script.complete()

//设置period
function setPeriod(event, period, description) {
  const supplement = description == '延期' || description == '提前' ? '完成' : ''
  if (period < 3600) {
    return (subHeading =
      Math.floor((period / 60).toFixed(1)) == 0
        ? `准时完成`
        : `${description}${(period / 60).toFixed()}分钟${supplement}`)
  } else if (period >= 3600 && period <= 3600 * 24) {
    return (subHeading =
      ((period % 3600) / 60).toFixed() == 0
        ? `${description}${(period / 3600).toFixed()}小时${supplement}`
        : `${description}${Math.floor((period / 3600).toFixed(2))}小时${((period % 3600) / 60).toFixed()}分钟${supplement}`)
  } else {
    return (subHeading =
      ((period % (3600 * 24)) / 3600).toFixed() == 0
        ? `${description}${(period / 3600 / 24).toFixed()}天${supplement}`
        : `${description}${(period / 3600 / 24).toFixed()}天${((period % (3600 * 24)) / 3600).toFixed()}小时${supplement}`)
  }
}

//日历中创建提醒
function updateEvent(event, reminder) {
  cal_name = reminder.calendar.title
  cal = m_dict[cal_name]
  event.calendar = cal
  // console.warn(event.calendar.title)
  // 已完成事项
  if (reminder.isCompleted) {
    event.isAllDay = false
    event.startDate = reminder.dueDate
    event.endDate = reminder.completionDate
    var period = (reminder.dueDate - reminder.completionDate) / 1000
    period = period.toFixed()
    if (period < 0) {
      period = -period
      let titleTail = setPeriod(event, period, '延期')
      event.title = `✅${reminder.title} (${titleTail})`
    } else if (period == 0) {
      event.title = `✅${reminder.title} (准时完成)`
    } else {
      let titleTail = setPeriod(event, period, '提前')
      event.title = `✅${reminder.title} (${titleTail})`
      event.endDate = reminder.dueDate
      event.startDate = reminder.completionDate
    }
  }
  // 未完成事项
  else {
    const nowtime = new Date()
    var period = (reminder.dueDate - nowtime) / 1000
    period = period.toFixed()
    if (period < 0) {
      // 待办顺延
      period = -period
      let titleTail = setPeriod(event, period, '已延期')
      // 如果不是在同一天,设置为全天事项
      if (reminder.dueDate.getDate() != nowtime.getDate()) {
        event.title = `❌${reminder.title} (${titleTail})`
        event.startDate = nowtime
        event.endDate = nowtime
        event.isAllDay = true
      }
      // 在同一天的保持原来的时间
      else {
        event.title = `⭕️${reminder.title} (${titleTail})`
        event.isAllDay = false
        event.startDate = reminder.dueDate
        event.endDate = nowtime
      }
    } else {
      event.isAllDay = false
      let titleTail = setPeriod(event, period, '还剩')
      event.title = `⭕️${reminder.title} (${titleTail})`
      event.startDate = reminder.dueDate
      event.endDate = reminder.dueDate
    }
  }
  event.save()
}
```

- **脚本二：**
> 1. 修改了时间最小单位（当天精确到分钟，隔天精确到小时）   
> 2. 将项目完成信息挪到了标题里，顺带去掉了底部的地图定位   
> 3. 去掉了结束时间多出来的1小时（该修改引入的新问题：项目起始和结束时间差小于30分钟时，日历中时间轴上的字体会缩小）   
> 4. 替换掉了备注里的identifier，备注信息同步（提醒 ——> 日历）   
> 5. 引入的bug：提醒事项设置定时重复时，已完成的提醒事项不会在日历中显示，只显示最新的未完成的提醒事项   

<div class="smartideo">
 <div class="player">
  <iframe src="//player.bilibili.com/player.html?aid=930598306&bvid=BV1dK4y1d7xT&cid=338475224&page=1&amp;high_quality=1&amp;danmaku=0" width="100%"  height="100%" frameborder="no" scrolling="no" allowfullscreen="allowfullscreen"> </iframe>
 </div>
</div>

[ :link: iOS【提醒事项】同步到【日历】—— Scriptable的灵活DIY ](https://www.bilibili.com/video/BV1dK4y1d7xT?share_source=copy_web)  

```js
//要同步的时间段，当前时间前后n个月
var dur_month = 2

const startDate = new Date()
startDate.setMonth(startDate.getMonth() - dur_month)
console.log(`日历的开始时间 ${startDate.toLocaleDateString()}`)

const endDate = new Date()
endDate.setMonth(endDate.getMonth() + dur_month)
console.log(`日历的结束时间 ${endDate.toLocaleDateString()}`)

const reminders = await Reminder.allDueBetween(startDate, endDate)
console.log(`获取 ${reminders.length} 条提醒事项`)

var calendar = await Calendar.forEvents()

//获取日历名和对应的日历
var m_dict = {}
for (cal of calendar) {
  m_dict[cal.title] = cal
  //console.log(`日历:${cal.title}`)
}

const events = await CalendarEvent.between(startDate, endDate, calendar)
console.log(`获取 ${events.length} 条日历`)

for (const reminder of reminders) {
  reminder.notes = (!reminder.notes || reminder.notes == null || reminder.notes == 'undefined') ? '无' : reminder.notes
  //const targetNote = `[Reminder] ${reminder.identifier}`
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' }
  // 备注中要添加的提醒事项创建时间
  const _creationDate = reminder.creationDate.toLocaleTimeString('zh-CN', options).replace(/\//g, '.')
  // 备注中要添加的提醒事项完成时间
  // const _completionDate = (reminder.completionDate == null && reminder.isCompleted == false) ? ' ' : `完成：${reminder.completionDate.toLocaleTimeString('zh-CN', options).replace(/\//g, '.')}`
  // 要同步到日历备注的提醒事项信息
  // const targetNote = `同步自提醒事项👇\n列表：${reminder.calendar.title}\n标题：${reminder.title}\n创建：${_creationDate}\n${_completionDate}`
  const targetNote = `同步自提醒事项👇\n列表：${reminder.calendar.title}\n标题：${reminder.title}\n创建：${_creationDate}`
  // 过滤重复的reminder
  const [targetEvent] = events.filter((e) => e.notes != null && e.notes.indexOf(targetNote) != -1) 

  if (!m_dict[reminder.calendar.title]) {
    console.warn('找不到日历' + reminder.calendar.title)
    continue
  }

  if (targetEvent) {
    //console.log(`找到已经创建的事项 ${reminder.title}`)
    updateEvent(targetEvent, reminder)
  } else {
    console.warn(
      `同步提醒事项【${reminder.title}】到日历【${reminder.calendar.title}】`
    )
    const newEvent = new CalendarEvent()
    // 日历备注
    newEvent.notes = reminder.notes + '\n\n' + targetNote //要加入备注
    updateEvent(newEvent, reminder)
  }
}

Script.complete()

//设置period
function setPeriod(event, period, description) {
  const supplement = (description == '延期' || description == '提前') ? '完成' : ''
  if (period < 3600) {
    return (subHeading =
      Math.floor((period / 60).toFixed(1)) == 0
        ? `准时完成`
        : `${description}${(period / 60).toFixed()}分钟${supplement}`)
  } else if (period >= 3600 && period <= 3600 * 24) {
    return (subHeading =
      ((period % 3600) / 60).toFixed() == 0
        ? `${description}${(period / 3600).toFixed()}小时${supplement}`
        : `${description}${Math.floor((period / 3600).toFixed(2))}小时${((period % 3600) / 60).toFixed()}分钟${supplement}`)
  } else {
    return (subHeading =
      ((period % (3600 * 24)) / 3600).toFixed() == 0
        ? `${description}${(period / 3600 / 24).toFixed()}天${supplement}`
        : `${description}${(period / 3600 / 24).toFixed()}天${((period % (3600 * 24)) / 3600).toFixed()}小时${supplement}`)
  }
}

//日历中创建提醒
function updateEvent(event, reminder) {
  cal_name = reminder.calendar.title
  cal = m_dict[cal_name]
  event.calendar = cal
  // console.warn(event.calendar.title)
  // 已完成事项
  if (reminder.isCompleted) {
    event.isAllDay = false
    event.startDate = reminder.dueDate
    event.endDate = reminder.completionDate
    var period = (reminder.dueDate - reminder.completionDate) / 1000
    period = period.toFixed()
    if (period < 0) {
      period = -period
      let titleTail = setPeriod(event, period, '延期')
      event.title = `✅${reminder.title} (${titleTail})`
    } else if (period == 0) {
      event.title = `✅${reminder.title} (准时完成)`
    } else {
      let titleTail = setPeriod(event, period, '提前')
      event.title = `✅${reminder.title} (${titleTail})`
      event.endDate = reminder.dueDate
      event.startDate = reminder.completionDate
    }
  }
  // 未完成事项
  else {
    const nowtime = new Date()
    var period = (reminder.dueDate - nowtime) / 1000
    period = period.toFixed()
    if (period < 0) {
      // 待办顺延
      period = -period
      let titleTail = setPeriod(event, period, '已延期')
      // 如果不是在同一天,设置为全天事项
      if (reminder.dueDate.getDate() != nowtime.getDate()) {
        event.title = `❌${reminder.title} (${titleTail})`
        event.startDate = nowtime
        event.endDate = nowtime
        event.isAllDay = true
      }
      // 在同一天的保持原来的时间
      else {
        event.title = `⭕️${reminder.title} (${titleTail})`
        event.isAllDay = false
        event.startDate = reminder.dueDate
        event.endDate = nowtime
      }
    } else {
      event.isAllDay = false
      let titleTail = setPeriod(event, period, '还剩')
      event.title = `⭕️${reminder.title} (${titleTail})`
      event.startDate = reminder.dueDate
      event.endDate = reminder.dueDate
    }
  }
  event.save()
}
```

**常见问题解决方案：**   
<div class="smartideo">
 <div class="player">
  <iframe src="//player.bilibili.com/player.html?aid=630593643&bvid=BV1ib4y1f7n9&cid=338861178&page=1&amp;high_quality=1&amp;danmaku=0" width="100%"  height="100%" frameborder="no" scrolling="no" allowfullscreen="allowfullscreen"> </iframe>
 </div>
</div>

[ :link: 解决iOS快捷指令自动化执行Scriptable脚本时的问题](https://www.bilibili.com/video/BV1ib4y1f7n9?share_source=copy_web)

### 2. 实时获取最新的财经新闻
**网页版参考 [ :link:  ruanyf / sina-news](https://github.com/ruanyf/sina-news)**

![](https://tva1.sinaimg.cn/large/008i3skNly1gqi52lk805g309d0kb1kx.gif)
![](https://tva1.sinaimg.cn/large/008i3skNly1gqlnyvi8vsj309e0kb3yo.jpg)
   
```js
//创建小组件
const widget = new ListWidget();

//添加文本
const news = await getNewsContent();
console.log(news[0]);

const text = widget.addText(`${news[0].rich_text.trim()}\n\n${ news[0].create_time}`);
text.textColor = Color.orange();
text.font = Font.boldRoundedSystemFont(13);
//text.font = new Font('Menlo', 13);
text.leftAlignText();

widget.setPadding(12, 12, 12, 0);

//添加渐变色背景
const gradient = new LinearGradient();
gradient.locations = [0, 0.5, 1];
gradient.colors = [
  new Color('#2c5364'),
  new Color('#203a43'),
  new Color('#0f2027'),
];
widget.backgroundGradient = gradient;

//设置组件
Script.setWidget(widget);

//获取news json
async function getNewsContent() {
  const url = 'https://zhibo.sina.com.cn/api/zhibo/feed?page=1&page_size=30&zhibo_id=152&tag_id=0&dire=f&dpc=1&type=0';
  const request = new Request(url, timeoutInterval = 120);
  const res = await request.loadJSON();
  const listArr = res.result.data.feed.list;
  //过滤数组，不想显示的新闻的关键词填入 filterArr 中
  const filterArr = ['比特币', '莱特币', '瑞波币', '以太币', '以太坊', '狗狗币', '疫苗', '新冠', '疫情', '蓬佩奥'];

  let filterResult = listArr.filter(item => {
    return filterArr.every(ele => {
      return !item.rich_text.includes(ele);
    });
  });

  return filterResult;
  //console.log(res.result.data.feed.list[0].create_time);
  //return res.result.data.feed.list[0].rich_text;
  //return res.result.data.feed.list[0];
}
```

### 3. itemInfo
**根据 [  :link:  byenow / scriptable-widget](https://github.com/byenow/scriptable-widget) 修改**

![](https://tva1.sinaimg.cn/large/008i3skNly1gqi4soifnjj30v90l3dgz.jpg)   

![](https://tva1.sinaimg.cn/large/008i3skNly1gqi4so2zu6j30v90kxq42.jpg)

- 修改如下信息 

```js
const User = '你要显示的名字'
const City = '所在城市'
const Coordinates = '城市经纬度，浏览器可查'

// 下面两个key需要在相应的网站去申请，注意免费账号有单日数据请求次数限制
const WeatherKey = '在后面的注释网站里申请key' // you can get it from https://dev.heweather.com/// 
const AQIKey ='在后面的注释网站里申请key'   // https://dev.heweather.com/
```


```js
// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: orange icon-glyph: quote-right

const User = 'Tien'
const City = 'beijing'
// 城市经纬度
const Coordinates = '116.41,39.92'
const WeatherKey = '在后面的注释网站里申请key' // you can get it from https://dev.heweather.com/// 
const AQIKey ='在后面的注释网站里申请key'   // https://dev.heweather.com/
 
// const AQIToken = 'key' // you can get it from https://aqicn.org/data-platform/token/#/

const aqi = await getAQI()
const lunarData = await getLunarData()
const weatherData = await getWeather()
console.log(weatherData)
const widget = createWidget()
Script.setWidget(widget)
Script.complete()

function createWidget() {
    const w = new ListWidget()
    const bgColor = new LinearGradient()

    bgColor.colors = [new Color('#2c5364'), new Color('#203a43'), new Color('#0f2027')]
    bgColor.locations = [0.0, 0.5, 1.0]
    w.backgroundGradient = bgColor

    w.setPadding(12, 12, 12, 0)
    w.spacing = 8

    const time = new Date()

    const hour = time.getHours()
    const isMidnight = hour < 8 && 'midnight'
    const isMorning = hour >= 8 && hour < 12 && 'morning'
    const isAfternoon = hour >= 12 && hour < 19 && 'afternoon'
    const isEvening = hour >= 19 && hour < 21 && 'evening'
    const isNight = hour >= 21 && 'night'

    const dfTime = new DateFormatter()
    dfTime.locale = 'en'
    dfTime.useMediumDateStyle()
    dfTime.useNoTimeStyle()

    const Line1 = w.addText(`[🤖] Hi, ${User}. Good ${isMidnight || isMorning || isAfternoon || isEvening || isNight}!`)
    Line1.textColor = new Color('#fb6b55') 
//     Line1.font = new Font('Menlo', 11)  
    Line1.font = Font.boldRoundedSystemFont(12)
    const enTime = dfTime.string(time)
    const Line2 = w.addText(`[📆] ${enTime} ${lunarData}`)
    Line2.textColor = new Color('#C6FFDD')
//     Line2.font = new Font('Menlo', 11)  
    Line2.font = Font.boldRoundedSystemFont(12)
    const Line3 = w.addText(`[☁️] ${weatherData} AQI:${aqi}`)
    Line3.textColor = new Color('#3896d0')
//     Line3.font = new Font('Menlo', 11)
    Line3.font = Font.boldRoundedSystemFont(12)

    const Line4 = w.addText(`[${Device.isCharging() ? '⚡️' : '🔋'}] ${renderBattery()} ${Device.isCharging() ? 'Charging' : 'Battery'}`)
    Line4.textColor = new Color('#2aa876')
//     Line4.font = new Font('Menlo', 11)
    Line4.font = Font.boldRoundedSystemFont(12)
    const Line5 = w.addText(`[⏳] ${renderYearProgress()} YearProgress`)
    Line5.textColor = new Color('#fba566')
//     Line5.font = new Font('Menlo', 11)
    Line5.font = Font.boldRoundedSystemFont(12)
    return w
}
// 访问速度慢，需要VPN
//  async function getAQI() {
//      const url = `https://api.waqi.info/feed/${City}/?token=${AQIToken}`
//      const request = new Request(url)
//      const res = await request.loadJSON()
//      return res.data.aqi
// }

async function getAQI() {
    const url = `https://devapi.qweather.com/v7/air/now?location=${Coordinates}&key=${AQIKey}`// 
    const request = new Request(url, timeoutInterval = 1800)
    const res = await request.loadJSON()
    // console.log(res.now)
    return res.now.aqi 
 }

async function getLunarData() {
    const url = 'https://api.xlongwei.com/service/datetime/convert.json'
    const request = new Request(url, timeoutInterval = 3600)
    const res = await request.loadJSON()
    return `${res.ganzhi}年（${res.shengxiao}）${res.chinese.replace(/.*年/, '')}`
}

async function getWeather() {
    const requestCityInfo = new Request(
        `https://geoapi.heweather.net/v2/city/lookup?key=${WeatherKey}&location=${City}&lang=en`, timeoutInterval = 1800
    )
    const resCityInfo = await requestCityInfo.loadJSON()
    const { name, id } = resCityInfo.location[0]
    // console.log(name)

    const requestNow = new Request(`https://devapi.heweather.net/v7/weather/now?location=${id}&key=${WeatherKey}&lang=en`, timeoutInterval = 3600)    
    const requestDaily = new Request(`https://devapi.heweather.net/v7/weather/3d?location=${id}&key=${WeatherKey}&lang=en`, timeoutInterval = 3600)   
    const resNow = await requestNow.loadJSON()
    const resDaily = await requestDaily.loadJSON()
    //console.log(resDaily.daily[0])

    //return `${name} ${resNow.now.text} T:${resNow.now.temp}° H:${resDaily.daily[0].tempMax}° L:${resDaily.daily[0].tempMin}°`
    return `${name} | ${resNow.now.text} Temp:${resNow.now.temp}° UV:${resDaily.daily[0].uvIndex}`
}

// 如果进度条过长导致换行，可以修改下面的数字15，或者修改字体，把 Font.boldRoundedSystemFont(12) 改成 new Font('Menlo', 11)
function renderProgress(progress) {
    const used = '▓'.repeat(Math.floor(progress * 15))
    const left = '░'.repeat(15 - used.length)
    return `${used}${left} ${Math.floor(progress * 100)}%`
}

function renderBattery() {
    const batteryLevel = Device.batteryLevel()
    return renderProgress(batteryLevel)
}

function renderYearProgress() {
    const now = new Date()
    const start = new Date(now.getFullYear(), 0, 1)     // Start of this year
    const end = new Date(now.getFullYear() + 1, 0, 1)   // End of this year
    const progress = (now - start) / (end - start)
    return renderProgress(progress)
}
```
