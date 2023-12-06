import Layout from "./layout";
import Head from "next/head";

export default function JabbasPalace() {
  const title = "Jabba's Palace";
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <p>
          On the far side of the Dune Sea on a small, insignificant planet lives
          the galaxy's most notorious and dangerous gangster. Surrounding
          himself with bounty hunters, assassins, slave girls and smugglers
          you'd think that Jabba would be wary of the plotting that went on
          under his nose.
        </p>

        <p>
          Instead the Hutt was unconcerned about these many and varied plots
          (Bib Fortuna counted fourteen different plots against Jabba's life and
          sixty five different plots to rob the palace). In fact he was quite
          arrogant in his dealings with them. He would let them continue for a
          while but before the plot could be executed, Jabba would capture the
          traitors. The usual punishment being a trip to the Rancor pit.
        </p>

        <p>
          So when a so-called Jedi Knight and his friends entered his palace he
          was surprised and unprepared for how this young man could affect him
          and his criminal empire...
        </p>
        <p>
          This site is dedicated to some of those plots and conspirators in
          Jabba's palace who had dreams and aspirations of being rid of the Hutt
          or some other unfortunate creature in the palace. Some of these plots
          may have worked; others were doomed to failure from the start.
        </p>
        <p>
          In each section you will find information on the conspirator
          themselves and their plot. It will also show the outcome of the plot
          and, in my opinion, whether or not the plot could have worked. Some
          related links to the official site are also supplied.
        </p>
        <p>
          The plots are from such characters as
          <a href="mara.html">Mara Jade</a> the Emperor's Hand,
          <a href="tessk.html">Tessk</a> the Quarren,
          <a href="reeyees.html">Ree-Yees</a> the Gran,
          <a href="dannik.html">Dannik Jerriko</a> the assassin and
          <a href="bib.html">Bib Fortuna</a> the Twi'lek and they range from
          killing a Jedi Knight to stealing from the palace, even killing the
          Hutt himself.
        </p>
        <p>
          Most of my information came from the books "Tales from Jabba's Palace"
          - Edited by Kevin J. Anderson and "Star Wars: The Essential Guide to
          Characters" by Andy Manguels. The pictures of the conspirators also
          come from this book and were drawn by Michael Butkus. Other pictures
          are from
          <a href="http://www.jedinet.com" target="_blank">
            JediNet.com
          </a>
          ,
          <a href="http://www.galacticempire.net" target="_blank">
            GalacticEmpire.net
          </a>
          and the
          <a href="http://www.starwars.com" target="_blank">
            Official site
          </a>
          .
        </p>
        <p>
          If you are new to "Star Wars" or you haven't read either of these
          books then I have supplied a small index of characters, creatures and
          aliens that are mentioned throughout this site. If you see something
          that you don't understand, go to the
          <a href="other.html">Additional Information</a> page and you may find
          it there.
        </p>
      </article>
    </Layout>
  );
}
