import Link from "next/link";
import DisplayDate from "./DisplayDate";

const moviesToWatch = [
  {
    id: 1,
    title: "X-Men",
    week: "1",
    release: "2000-07-14",
    dateSeen: "2026-07-26",
    url: "2026-07-26_Marvel-Rewatch-for-Doomsday-X-Men",
  },
  {
    id: 2,
    title: "Spider-Man",
    week: "1",
    release: "2002-05-03",
    dateSeen: "2026-07-27",
    url: "2026-07-27_Marvel-Rewatch-for-Doomsday-Spider-Man",
  },
  {
    id: 3,
    title: "X2: X-Men United",
    week: "1",
    release: "2003-05-02",
    dateSeen: "2026-07-29",
    url: "2026-07-29_Marvel-Rewatch-for-Doomsday-X-2",
  },
  {
    id: 4,
    title: "Spider-Man 2",
    week: "1",
    release: "2004-06-30",
    dateSeen: "2026-08-01",
    url: "2026-08-01_Marvel-Rewatch-for-Doomsday-Spider-Man-2",
  },
  {
    id: 5,
    title: "X-Men: The Last Stand",
    week: "1",
    release: "2006-05-26",
    dateSeen: "2026-08-05",
    url: "2026-08-05_Marvel-Rewatch-for-Doomsday-X-men-last-stand",
  },
  {
    id: 6,
    title: "Spider-Man 3",
    week: "2",
    release: "2007-05-04",
    dateSeen: "2026-08-10",
    url: "2026-08-10_Marvel-Rewatch-for-Doomsday-Spider-Man-3",
  },
  {
    id: 7,
    title: "Iron Man",
    week: "2",
    release: "2008-05-02",
    dateSeen: "2026-08-12",
    url: "2026-08-12_Marvel-Rewatch-for-Doomsday-Ironman",
  },
  {
    id: 8,
    title: "The Incredible Hulk",
    week: "2",
    release: "2008-06-13",
    dateSeen: "2026-08-17",
    url: "2026-08-17_Marvel-Rewatch-for-Doomsday-Incredible-Hulk",
  },
  {
    id: 9,
    title: "X-Men Origins: Wolverine",
    week: "2",
    release: "2009-05-01",
  },
  { id: 10, title: "Iron Man 2", week: "2", release: "2010-05-07" },
  { id: 11, title: "Thor", week: "3", release: "2011-05-06" },
  { id: 12, title: "X-Men: First Class", week: "3", release: "2011-06-03" },
  {
    id: 13,
    title: "Captain America: The First Avenger",
    week: "3",
    release: "2011-07-22",
  },
  { id: 14, title: "The Avengers", week: "3", release: "2012-05-04" },
  { id: 15, title: "The Amazing Spider-Man", week: "3", release: "2012-07-03" },
  { id: 16, title: "Iron Man 3", week: "4", release: "2013-05-03" },
  { id: 17, title: "The Wolverine", week: "4", release: "2013-07-26" },
  { id: 18, title: "Thor: The Dark World", week: "4", release: "2013-11-08" },
  { id: 19, title: "Deadpool", week: "4", release: "2016-02-12" },
  {
    id: 20,
    title: "Captain America: The Winter Soldier",
    week: "4",
    release: "2014-04-04",
  },
  {
    id: 21,
    title: "The Amazing Spider-Man 2",
    week: "5",
    release: "2014-05-02",
  },
  {
    id: 22,
    title: "X-Men: Days of Future Past",
    week: "5",
    release: "2014-05-23",
  },
  {
    id: 23,
    title: "Guardians of the Galaxy",
    week: "5",
    release: "2014-08-01",
  },
  {
    id: 24,
    title: "Avengers: Age of Ultron",
    week: "5",
    release: "2015-05-01",
  },
  { id: 25, title: "Ant-Man", week: "5", release: "2015-07-17" },
  {
    id: 26,
    title: "Captain America: Civil War",
    week: "6",
    release: "2016-05-06",
  },
  { id: 27, title: "X-Men: Apocalypse", week: "6", release: "2016-05-27" },
  { id: 28, title: "Doctor Strange", week: "6", release: "2016-11-04" },
  { id: 29, title: "Logan", week: "6", release: "2017-05-03" },
  {
    id: 30,
    title: "Guardians of the Galaxy Vol. 2",
    week: "6",
    release: "2017-05-05",
  },
  { id: 31, title: "Spider-Man: Homecoming", week: "7", release: "2017-07-07" },
  { id: 32, title: "Thor: Ragnarok", week: "7", release: "2017-11-03" },
  { id: 33, title: "Black Panther", week: "7", release: "2018-02-16" },
  { id: 34, title: "Avengers: Infinity War", week: "7", release: "2018-04-27" },
  { id: 35, title: "Deadpool 2", week: "7", release: "2018-05-18" },
  { id: 36, title: "Ant-Man and the Wasp", week: "8", release: "2018-07-06" },
  { id: 37, title: "Captain Marvel", week: "8", release: "2019-03-08" },
  { id: 38, title: "Avengers: Endgame", week: "8", release: "2019-04-26" },
  { id: 39, title: "X-Men: Dark Phoenix", week: "8", release: "2019-06-07" },
  {
    id: 40,
    title: "Spider-Man: Far From Home",
    week: "8",
    release: "2019-07-02",
  },
  { id: 41, title: "WandaVision (1-3)", week: "9", release: "2021-01-15" },
  { id: 42, title: "WandaVision (4-6)", week: "9", release: "2021-01-15" },
  { id: 43, title: "WandaVision (7-9)", week: "9", release: "2021-01-15" },
  {
    id: 44,
    title: "The Falcon and the Winter Soldier (1-3)",
    week: "9",
    release: "2021-03-19",
  },
  {
    id: 45,
    title: "The Falcon and the Winter Soldier (4-6)",
    week: "9",
    release: "2021-03-19",
  },
  { id: 46, title: "Loki (Season 1) (1-3)", week: "10", release: "2021-06-09" },
  { id: 47, title: "Loki (Season 1) (4-6)", week: "10", release: "2021-06-09" },
  { id: 48, title: "Black Widow", week: "10", release: "2021-07-09" },
  {
    id: 49,
    title: "Shang-Chi and the Legend of the Ten Rings",
    week: "10",
    release: "2021-10-03",
  },
  { id: 50, title: "Eternals", week: "10", release: "2021-11-05" },
  { id: 51, title: "Hawkeye (1-3)", week: "11", release: "2021-11-24" },
  { id: 52, title: "Hawkeye (4-6)", week: "11", release: "2021-11-24" },
  {
    id: 53,
    title: "Spider-Man: No Way Home",
    week: "11",
    release: "2021-12-17",
  },
  { id: 54, title: "Moon Knight (1-3)", week: "11", release: "2022-03-30" },
  { id: 55, title: "Moon Knight (4-6)", week: "11", release: "2022-03-30" },
  {
    id: 56,
    title: "Doctor Strange in the Multiverse of Madness",
    week: "12",
    release: "2022-05-06",
  },
  { id: 57, title: "Ms. Marvel (1-3)", week: "12", release: "2022-06-08" },
  { id: 58, title: "Ms. Marvel (4-6)", week: "12", release: "2022-06-08" },
  {
    id: 59,
    title: "Thor: Love and Thunder",
    week: "12",
    release: "2022-07-08",
  },
  {
    id: 60,
    title: "She-Hulk: Attorney at Law (1-3)",
    week: "12",
    release: "2022-08-18",
  },
  {
    id: 61,
    title: "She-Hulk: Attorney at Law (4-6)",
    week: "13",
    release: "2022-08-18",
  },
  {
    id: 62,
    title: "She-Hulk: Attorney at Law (7-9)",
    week: "13",
    release: "2022-08-18",
  },
  {
    id: 63,
    title: "Black Panther: Wakanda Forever",
    week: "13",
    release: "2022-11-11",
  },
  {
    id: 64,
    title: "Guardians of the Galaxy: Holiday Special",
    week: "13",
    release: "2022-11-25",
  },
  {
    id: 65,
    title: "Ant-Man and the Wasp: Quantumania",
    week: "13",
    release: "2023-02-17",
  },
  {
    id: 66,
    title: "Guardians of the Galaxy Vol. 3",
    week: "14",
    release: "2023-05-05",
  },
  { id: 67, title: "Secret Invasion (1-3)", week: "14", release: "2023-06-21" },
  { id: 68, title: "Secret Invasion (4-6)", week: "14", release: "2023-06-21" },
  { id: 69, title: "Loki (Season 2) (1-3)", week: "14", release: "2023-10-05" },
  { id: 70, title: "Loki (Season 2) (4-6)", week: "14", release: "2023-10-05" },
  { id: 71, title: "The Marvels", week: "15", release: "2023-11-10" },
  { id: 72, title: "Echo (1-3)", week: "15", release: "2024-01-09" },
  { id: 73, title: "Echo (4-5)", week: "15", release: "2024-01-09" },
  { id: 74, title: "Deadpool & Wolverine", week: "15", release: "2024-07-26" },
  {
    id: 75,
    title: "Agatha All Along (1-3)",
    week: "15",
    release: "2024-09-18",
  },
  {
    id: 76,
    title: "Agatha All Along (4-6)",
    week: "16",
    release: "2024-09-18",
  },
  {
    id: 77,
    title: "Agatha All Along (7-9)",
    week: "16",
    release: "2024-09-18",
  },
  {
    id: 78,
    title: "Captain America: Brave New World",
    week: "16",
    release: "2025-02-14",
  },
  {
    id: 79,
    title: "Daredevil: Born Again (Season 1) (1-3)",
    week: "16",
    release: "2025-03-04",
  },
  {
    id: 80,
    title: "Daredevil: Born Again (Season 1) (4-6)",
    week: "16",
    release: "2025-03-04",
  },
  {
    id: 81,
    title: "Daredevil: Born Again (Season 1) (7-9)",
    week: "17",
    release: "2025-03-04",
  },
  { id: 82, title: "Thunderbolts*", week: "17", release: "2025-05-02" },
  { id: 83, title: "Ironheart (1-3)", week: "17", release: "2025-06-24" },
  { id: 84, title: "Ironheart (4-6)", week: "17", release: "2025-06-24" },
  {
    id: 85,
    title: "The Fantastic Four: First Steps",
    week: "17",
    release: "2025-07-25",
  },
  { id: 86, title: "Wonder Man (1-3)", week: "18", release: "2026-01-27" },
  { id: 87, title: "Wonder Man (4-6)", week: "18", release: "2026-01-27" },
  { id: 88, title: "Wonder Man (7-8)", week: "18", release: "2026-01-27" },
  {
    id: 89,
    title: "Daredevil: Born Again (Season 2) (1-3)",
    week: "18",
    release: "2026-03-24",
  },
  {
    id: 90,
    title: "Daredevil: Born Again (Season 2) (4-6)",
    week: "18",
    release: "2026-03-24",
  },
  {
    id: 91,
    title: "Daredevil: Born Again (Season 2) (7-8)",
    week: "19",
    release: "2026-03-24",
  },
  {
    id: 92,
    title: "The Punisher: One Last Kill",
    week: "19",
    release: "2026-05-12",
  },
  {
    id: 93,
    title: "Spider-Man: Brand New Day",
    week: "19",
    release: "2026-07-31",
  },
  { id: 94, title: "VisionQuest (1-3)", week: "19", release: "2026-10-14" },
  { id: 95, title: "VisionQuest (4-6)", week: "19", release: "2026-10-14" },
  { id: 96, title: "VisionQuest (7-8)", week: "20", release: "2026-10-14" },
  {
    id: 97,
    title: "Avengers: Doomsday",
    week: "20",
    release: "2026-12-18",
  },
];

function SortMoviesByReleaseYear(movies) {
  return movies.sort((a, b) => {
    if (a.release > b.release) return 1;
    if (a.release < b.release) return -1;
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
  });
}

function LinkTitle({ title, url }) {
  if (url) return <Link href={`/posts/${url}`}>{title}</Link>;
  return title;
}

export default function DoomsdayTrackerComponent() {
  const movies = SortMoviesByReleaseYear(moviesToWatch);
  const result = movies.map((x) => {
    return (
      <tr key={x.id}>
        <td>{x.week}</td>
        <td>
          <LinkTitle title={x.title} url={x.url} />
        </td>
        <td>
          <DisplayDate dateString={x.release ? x.release : null} />
        </td>
        <td>
          <DisplayDate dateString={x.dateSeen ? x.dateSeen : null} />
        </td>
      </tr>
    );
  });
  return (
    <>
      <h1>Doomsday Tracker</h1>
      <table>
        <thead>
          <tr>
            <th>Week</th>
            <th>Movie/Show</th>
            <th>Release Date</th>
            <th>Date Seen</th>
          </tr>
        </thead>
        <tbody>{result}</tbody>
      </table>
    </>
  );
}
