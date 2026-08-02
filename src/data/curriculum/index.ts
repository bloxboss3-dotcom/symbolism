import type { Lesson, Module } from '../../types/content'
import { lesson01_1, module01 } from './m01'
import { lesson02_1, module02 } from './m02'
import { lesson03_1, module03 } from './m03'
import { lesson04_1, module04 } from './m04'
import { lesson05_1, module05 } from './m05'
import { lesson06_1, module06 } from './m06'
import { lesson07_1, module07 } from './m07'
import { lesson08_1, module08 } from './m08'
import { lesson09_1, module09 } from './m09'
import { lesson10_1, module10 } from './m10'
import { lesson11_1, module11 } from './m11'
import { lesson12_1, module12 } from './m12'

export const MODULES: Module[] = [
  module01,
  module02,
  module03,
  module04,
  module05,
  module06,
  module07,
  module08,
  module09,
  module10,
  module11,
  module12,
]

export const LESSONS: Lesson[] = [
  lesson01_1,
  lesson02_1,
  lesson03_1,
  lesson04_1,
  lesson05_1,
  lesson06_1,
  lesson07_1,
  lesson08_1,
  lesson09_1,
  lesson10_1,
  lesson11_1,
  lesson12_1,
]

const lessonById = new Map(LESSONS.map((lesson) => [lesson.id, lesson]))
const moduleById = new Map(MODULES.map((module) => [module.id, module]))

export function getLesson(id: string): Lesson | undefined {
  return lessonById.get(id)
}

export function getModule(id: string): Module | undefined {
  return moduleById.get(id)
}

export function lessonsForModule(moduleId: string): Lesson[] {
  const module = moduleById.get(moduleId)
  if (!module) return []
  return module.lessonIds.map((id) => lessonById.get(id)).filter((l): l is Lesson => Boolean(l))
}

export function moduleForLesson(lessonId: string): Module | undefined {
  const lesson = lessonById.get(lessonId)
  return lesson ? moduleById.get(lesson.moduleId) : undefined
}

/** Every lesson in curriculum order — the spine the Learn screen walks. */
export const LESSON_ORDER: string[] = MODULES.flatMap((module) => module.lessonIds)

export const TOTAL_LESSONS = LESSONS.length
export const TOTAL_MODULES = MODULES.length
