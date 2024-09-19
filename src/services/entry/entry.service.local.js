import { storageService } from '../async-storage.service'
import { makeId } from '../util.service'
import { userService } from '../user'
import {saveToStorage} from './../util.service'
import entries from '/data/entry.json'
console.log(entries);

const STORAGE_KEY = 'entryDB'

export const entryService = {
  query,
  getById,
  save,
  remove,
  addEntryMsg
}
window.es = entryService
// TODO: Implement functions
// BUG: sortField and sortDir are not used

async function query(filterBy = {}) {
  var entries = await storageService.query(STORAGE_KEY)
  console.log(entries);
  
    return entries
}

function getById(carId) {
  return storageService.get(STORAGE_KEY, carId)
}

async function remove(carId) {
  // throw new Error('Nope')
  await storageService.remove(STORAGE_KEY, carId)
}

async function save(entry) {
  var savedCar
  if (entry._id) {
    savedCar = await storageService.put(STORAGE_KEY, entry)
  } else {
    ;(entry.owner = userService.getLoggedUser()._id),
      (savedCar = await storageService.post(STORAGE_KEY, entry))
  }
  return savedCar
}

async function addEntryMsg(entryId, txt) {
  // Later, this is all done by the backend
  const entry = await getById(entryId)
  const { username, imgUrl, _id: id } = userService.getLoggedUser()
  const msg = {
    id: makeId(),
    by: {
      username,
      imgUrl,
      id
    },
    txt
  }
  entry.msgs.push(msg)
  await storageService.put(STORAGE_KEY, entry)

  return msg
}

(()=>{
  saveToStorage(STORAGE_KEY ,entries)
})()