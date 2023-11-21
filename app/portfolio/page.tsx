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
        title,
        publish,
        hideTitle,
        link,
        inCharge,
        detail,
        hideDetail,
      }) => (
        <>
        {publish ? (
          <div className={styles.work}>
            <h2>{title}</h2>
            <ul className={styles.inChargeList}>
              {inCharge.map((value) => (
                <li key={value}>{value}</li>  
              ))}
            </ul>
            <div className={styles.detail} dangerouslySetInnerHTML={{ __html: detail }} />
            <div className={styles.movie} dangerouslySetInnerHTML={{ __html: link.html }} />
          </div>
        ) : (
          <div className={styles.work}>
            <h2>{hideTitle}</h2>
            <ul className={styles.inChargeList}>
              {inCharge.map((value) => (
                <li key={value}>{value}</li>  
              ))}
            </ul>
            <div className={styles.detail} dangerouslySetInnerHTML={{ __html: hideDetail }} />
            <div className={styles.dummyMovie} />
          </div>
        )}
        </>
        )
      )}
    </main>
  )
}