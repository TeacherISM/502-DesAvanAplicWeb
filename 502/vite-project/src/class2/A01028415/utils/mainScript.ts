import { fetchData } from './fetchModule'

fetchData().then((items) => {
  console.log(`Fetched ${items.length} items:`)
  items.forEach((item) => console.log(`- ${item.name}`))
})
