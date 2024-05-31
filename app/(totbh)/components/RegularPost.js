import DisplayDate from "./DisplayDate";
import BlogTags from "./BlogTags";
import TotalConsumedExportedPerDayChart from "./TotalConsumedExportedPerDayChart";
import AverageConsumedExportedImportedPerHour from "./AverageConsumedExportedImportedPerHourChart";
import TotalConsumedExportedImportedPerHour from "./TotalConsumedExportedImportedPerHourChart";
import TotalConsumedHomePerDay from "./TotalConsumedHomePerDay";
import utilStyles from "../utils.module.css";

export default function RegularPost({ postData }) {
  return (
    <article>
      <h1 className={utilStyles.headingXl}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        <DisplayDate dateString={postData.date} />
      </div>
      <BlogTags tagList={postData.tags} />
      {postData.consumed ? (
        <TotalConsumedExportedPerDayChart
          month={postData.month}
          year={postData.year}
          consumed={postData.consumed}
          exported={postData.exported}
          imported={postData.imported}
        />
      ) : null}
      {postData.avgConsumed ? (
        <AverageConsumedExportedImportedPerHour
          avgConsumed={postData.avgConsumed}
          avgExported={postData.avgExported}
          avgImported={postData.avgImported}
        />
      ) : null}
      {postData.totalConsumed ? (
        <TotalConsumedExportedImportedPerHour
          totalConsumed={postData.totalConsumed}
          totalExported={postData.totalExported}
          totalImported={postData.totalImported}
        />
      ) : null}
      {postData.consumedHome ? (
        <TotalConsumedHomePerDay
          month={postData.month}
          year={postData.year}
          consumedHome={postData.consumedHome}
          consumedEddi={postData.consumedEddi}
        />
      ) : null}
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}
