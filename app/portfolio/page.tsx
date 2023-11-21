import Link from 'next/link'
import { getWork } from '@/lib/newt'
import styles from '@/app/portfolio/portfolio.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Newt・Next.jsブログ',
  description: 'NewtとNext.jsを利用したブログです',
}

export default async function Home() {
  const works = await getWork()
  return (
    <main className={styles.main}>
      {works.map(({
        _id,
        title,
        publish,
        hideTitle,
        link,
        inCharge,
        detail,
        hideDetail,
      }) => (
        <div key={_id}>
          <div>{title}</div>
          <div>{publish}</div>
          <div>{hideTitle}</div>
          <div className={styles.movie} dangerouslySetInnerHTML={{ __html: link.html }} />
          <div>{inCharge.join(',')}</div>
          <div className={styles.detail} dangerouslySetInnerHTML={{ __html: detail }} />
          <div className={styles.detail} dangerouslySetInnerHTML={{ __html: hideDetail }} />
        </div>
      ))}
    </main>
  )
}