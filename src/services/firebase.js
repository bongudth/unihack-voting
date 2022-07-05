import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set, get } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyBlYTRzRzqaPOpQTzfX-FEQeQiNsGsJOsQ',
  authDomain: 'unihackvotingweb.firebaseapp.com',
  projectId: 'unihackvotingweb',
  storageBucket: 'unihackvotingweb.appspot.com',
  messagingSenderId: '966295184355',
  appId: '1:966295184355:web:5ffc8f79edec6a8944f6d6',
  databaseURL: 'https://unihackvotingweb-default-rtdb.asia-southeast1.firebasedatabase.app'
}

const app = initializeApp(firebaseConfig)

const db = getDatabase(app)

function write(path, data) {
  return set(ref(db, path), data)
}

function read(path, field) {
  return new Promise((resolve, reject) => {
    return get(ref(db, path)).then(snapshot => {
      if (snapshot.exists()) {
        resolve(snapshot.val()[field])
      } else {
        reject(new Error('Not found'))
      }
    })
  })
}

export { write, read }
