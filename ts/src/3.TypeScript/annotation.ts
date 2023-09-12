/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-var */

var numberVal: number = 123
function toNumber(arg: string): number {
  return Number(arg)
}
var numberVal2: number = toNumber("123")

var numbers: number[] = [1, 2, 3]

var nameNumber: [string, number]
nameNumber = ["a", 123, 2456]
nameNumber = ["a"]
