import css from './AdvantagesSection.module.css'

export const AdvantagesSection = () => {
  return (
    <div className={css.advantagesSection}>
      <img
        className={css.advantagesPhoto}
        src="../../../src/assets/img/baner@1x.jpg"
        srcSet="../../../src/assets/img/baner@1x.jpg 1x, ../../baner@2x.jpg"
        alt="Woman drink water"
        loading="lazy"
      />

      <div className={css.advantagesUsers}>
        <div className={css.advantagesBlock}>
          <img
            src="../../../src/assets/img/user@1x.png"
            srcSet="../../../src/assets/img/user@1x.png 1x, ../../user@2x.png 2x"
            alt="Users"
            loading="lazy"
          />
          <p className={css.advantagesText}>
            Our <span className={css.advantagesSpan}>happy</span> customers
          </p>
        </div>
      </div>

      <div className={css.advantagesHabits}>
        <div className={css.advantagesHabits_inoneline}>
          <div className={css.advantagesHabits_1}>
            <div className={css.advantagesHabits_1_sircle}></div>
            <p className={css.advantagesHabits_1_text}>Habit drive</p>
          </div>
          <div className={css.advantagesHabits_2}>
            <p className={css.advantagesHabits_2_text}>View statistics</p>
          </div>
        </div>

        <div className={css.advantagesHabits_3}>
          <p className={css.advantagesHabits_3_text}>Personal rate setting</p>
        </div>
      </div>
    </div>
  )
}
