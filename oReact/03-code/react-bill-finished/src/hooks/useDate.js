import { useState } from 'react'
import dayjs from 'dayjs'
import isToday from 'dayjs/plugin/isToday'
dayjs.extend(isToday)

export const useDate = () => {
  // 控制时间显示
  const [date, setDate] = useState(new Date())
  // 控制弹窗的打开和关闭
  const [visible, setVisible] = useState(false)
  const dayjsDate = dayjs(date)
  const dateText = dayjsDate.isToday() ? '今天' : dayjsDate.format('YYYY/MM/DD')

  const onShowDate = () => setVisible(true)
  const onHideDate = () => setVisible(false)
  const onDateChange = val => setDate(val)

  return {
    date: dayjsDate,
    dateText,
    visible,
    onShowDate,
    onHideDate,
    onDateChange,
  }
}
