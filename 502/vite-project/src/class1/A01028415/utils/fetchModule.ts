export interface Item {
    id: number
    name: string
  }
  
  export const fetchData = async (): Promise<Item[]> => {
    try {
      const response = await fetch('/mock-api.json')
      if (!response.ok) throw new Error('Failed to fetch')
      const data: Item[] = await response.json()
      return data
    } catch (error) {
      console.error(`Error fetching data: ${(error as Error).message}`)
      return []
    }
  }
  