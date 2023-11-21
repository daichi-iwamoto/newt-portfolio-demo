import 'server-only'
import { createClient } from 'newt-client-js'
import { Work } from '@/type/work'
import { cache } from 'react'

const client = createClient({
  spaceUid: process.env.NEWT_SPACE_UID + '',
  token: process.env.NEWT_CDN_API_TOKEN + '',
  apiType: 'cdn',
})

export const getWork = cache(async () => {
  const { items } = await client.getContents<Work>({
    appUid: 'portfolio',
    modelUid: 'work',
    query: {
      select: [
        '_id',
        'title',
        'publish',
        'hideTitle',
        'link',
        'inCharge',
        'detail',
        'hideDetail',
      ],
    },
  })
  return items
})