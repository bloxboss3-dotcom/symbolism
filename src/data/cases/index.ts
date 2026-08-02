import type { CaseFile, TransferTrial } from '../../types/content'
import { caseFriend, caseLeader, caseStudent } from './cases-a'
import { caseConflict, caseProverb, caseSirens } from './cases-b'
import { TRIALS } from './trials'

export const CASES: CaseFile[] = [
  caseFriend,
  caseLeader,
  caseStudent,
  caseProverb,
  caseConflict,
  caseSirens,
]

const caseById = new Map(CASES.map((file) => [file.id, file]))
const trialById = new Map(TRIALS.map((trial) => [trial.id, trial]))

export function getCase(id: string): CaseFile | undefined {
  return caseById.get(id)
}

export function getTrial(id: string): TransferTrial | undefined {
  return trialById.get(id)
}

export { TRIALS }
export const TOTAL_CASES = CASES.length
export const TOTAL_TRIALS = TRIALS.length
