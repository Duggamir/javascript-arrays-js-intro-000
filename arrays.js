
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element)
{
  return [element, ...  array]
}

function destuctivelyAddElentToBeinningOfArray(array, element)
{
  return array.unshift(element)
}

functon aaddElementToEndOfArray(array, element)
{
  return [array, ... element]
}

function destructivelyAddElementToEndOfArray(array, element)
{
  return array.push(element)
}

function accessElementInArray(array, index)
{
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array)
{
  return array.shift()
}

function removeElementFrombeginningOfArray(array)
{
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array)
{
  return array.pop()
}

function removeElementFromEndOfArray(array)
{
  return array.slice(0, array.length - 1)
}
