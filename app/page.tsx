import styles from "@css/index.module.css";
import Link from "next/link";



function Home() {
  return (
    <div className={`${styles.homeContent} gap-6`}>
      <div className={styles.featuredWrapper}></div>
      <div className={`${styles.topChart} gap-2 p-4`}>
        <Link
          href="top"
          className="flex items-center w-full justify-between text-sm"
        >
          <span>Top Charts</span>
          View all
        </Link>
      </div>
      
    </div>
  );
}

export default Home;
