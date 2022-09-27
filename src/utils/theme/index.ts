/*
 * @Author: oushiyibeizideshi
 * @Date: 2022-09-24 20:52:47
 * @LastEditors: oushiyibeizideshi
 * @LastEditTime: 2022-09-28 00:21:55
 * @Description:
 *
 */
import { allTheme } from "./themes"
import { Theme } from "./type"
let currentThemeName = "light"
let themes: Theme = {}

export const initialTheme = (): void => {
  currentThemeName = localStorage.getItem("themeName") ?? currentThemeName
  localStorage.setItem("themeName", currentThemeName)
  const localThemes = JSON.parse(
    localStorage.getItem("themes") ?? "{}"
  ) as Theme
  if (Object.keys(localThemes).length > 0) {
    themes = localThemes
  } else {
    themes = allTheme
    localStorage.setItem("themes", JSON.stringify(allTheme))
  }
  setTheme(currentThemeName)
}

/**
 * @description: 单独修改某个样式
 */
export const setSingleProperty = (name: string, value: string): void => {
  themes[currentThemeName][name] = value
  localStorage.setItem("themes", JSON.stringify(themes))
  document.documentElement.style.setProperty(name, value)
}

/**
 * @description: 设置主题
 */
export const setTheme = (themeName: string): void => {
  currentThemeName = themeName
  const theme = themes[themeName]
  for (const key in theme) {
    document.documentElement.style.setProperty(key, theme[key])
  }
  localStorage.setItem("themeName", themeName)
  localStorage.setItem("themes", JSON.stringify(themes))
}
