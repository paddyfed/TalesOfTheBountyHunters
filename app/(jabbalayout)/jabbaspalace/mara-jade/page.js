import Layout, { siteTitle } from "../layout";
import Image from "next/image";
import MaraJadeLiveAction from "../../../../public/images/Jabba_Mara_Jade_Live_Action.jpg";
import MaraJadeLiveDancer from "../../../../public/images/Jabba_Mara_Jade_Dancer.webp";
import MaraJadeFace from "../../../../public/images/Jabba_MaraJade_Face.png";
import Head from "next/head";
import jabbastyles from "../jabbastyles.module.css";

export default function MaraJade() {
  const title = ` : Mara Jade`;

  return (
    <>
      <h1>Mara Jade</h1>
      <dl>
        <Image
          src={MaraJadeFace}
          width={300}
          alt="Mara Jade"
          className={jabbastyles.right}
        />
        <dt>Name</dt>
        <dd>Mara Jade</dd>
        <dt>Species</dt>
        <dd>Human, Female</dd>
        <dt>Occupation</dt>
        <dd>The Emperor's Hand</dd>
        <dt>Plot</dt>
        <dd>To kill Luke Skywalker by any means possible</dd>
        <dt>Reason</dt>
        <dd>Emperors Orders</dd>
        <dt>Co-Conspirators</dt>
        <dd>The Emperor</dd>
        <Image
          src={MaraJadeLiveAction}
          width={300}
          alt="Mara Jade from the Customizable Card Game"
          className={jabbastyles.left}
        />
        <dt>Action Taken</dt>
        <dd>
          Emperor Palpatine sent Mara, as the Emperors Hand, to Tatooine in an
          attempt to kill the last remaining Jedi, Luke Skywalker. She made her
          way to Jabba's palace and posed as the dancer Arica in the bloated
          one's court.
        </dd>
        <dd>
          She waited patiently for the moment that Skywalker would arrive to
          save his friend, Han Solo, who was encased in carbonite and hanging in
          Jabba's throne room.
        </dd>
        <dd>
          When Luke finally arrived she became sloppy. She slowly took a blaster
          from one of Jabba's guards while Skywalker was talking to Jabba.
          However she did not realise that another dancer, Melina, was watching
          her. Thinking she was trying to assassinate Jabba, Melina pulled out
          her own blaster and brought Mara back to a side chamber.
        </dd>
        <dd>
          The dancer confronted Mara and told her that Jabba would give her a
          reward if she turned her in. Mara, now furious with herself, used mind
          tricks on Jabba's Gammorrian guards to distract Melina and escape. By
          this time Skywalker had killed Jabba's Rancor and was to be sent to
          the Sarlacc Pit.
        </dd>
        <dd>
          Having missed her first chance to kill Skywalker, Mara tried to join
          the trip to the Sarlacc on Jabba's Sail Barge. She pleaded with Jabba
          to let her go with them but she was unsuccessful. Perhaps Jabba knew
          who she was and was not about to let her spoil his fun at the Great
          Pit of Carkoon. Mara was left behind at the palace.
        </dd>
        <Image
          src={MaraJadeLiveDancer}
          width={300}
          alt="Mara Jade as Arica"
          className={jabbastyles.right}
        />
        <dt>Outcome</dt>
        <dd>
          Emperor Palpatine contacted Mara. She told him of her failure.
          Palpatine ordered her to go to the planet Svivren and wait for further
          instructions. After the Emperor was killed, Mara soon joined the
          Smuggler, Talon Karrde and stayed with him for many years.
        </dd>
        <dd>
          When she finally met up with Skywalker she again tried to kill him,
          finishing the final orders given to her by the Emperor. She failed
          again and Luke turned her from the Dark Side of the Force.
        </dd>
        <dd>
          Luke trained her in the light side of the Force and she became a Jedi.
        </dd>
        <dd>
          After nine years of getting to know and trust Luke, Mara Jade married
          him in an ironic twist of fate.
        </dd>
        <dt>My Opinion</dt>
        <dd>
          Mara's plan, although seemingly foolproof, was in fact never going to
          work. Mara was obviously skilled enough to make her way to Jabba's
          palace and gain admittance to the throne room. However her
          inexperience showed when she allowed a dancer to creep up on her and
          capture her just at the moment that she was about to strike at Luke.
        </dd>
        <dd>
          It was only after the death of the Emperor and her many years with
          Karrde that she gained her experience as a fighter.
        </dd>
      </dl>
    </>
  );
}
