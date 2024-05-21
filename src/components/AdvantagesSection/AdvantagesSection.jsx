import css from './AdvantagesSection.module.css'

export const AdvantagesSection = () => {
  return (
    <div className={css.advantages_main}>
      <div className={css.advantages_users}>
        <ul className={css.advantages_usersImg}>
          <li className={css.advantages_point}>
            <img
              className={css.user}
              src="../../../src/assets/img/user-1.png"
              alt="user1"
            />
          </li>

          <li className={css.advantages_point}>
            <img
              className={css.user}
              src="../../../src/assets/img/user-2.png"
              alt="user2"
            />
          </li>

          <li className={css.advantages_point}>
            <img
              className={css.user}
              src="../../../src/assets/img/user-3.png"
              alt="user3"
            />
          </li>
        </ul>

        <p className={css.advantagesText}>
          Our <span className={css.textSpan}>happy</span> customers
        </p>
      </div>

      <div className={css.advantagesGroup_habits}>
        <ul className={css.advantagesTabs}>
          <li className={css.advantages_habits}>
            <div className={css.ellipse}></div>
            <p className={css.habit_1}>Habit drive</p>
          </li>
          <li className={css.advantages_habits}>
            <p className={css.habit_2_3}>View statistics</p>
          </li>
          <li className={css.advantages_habits}>
            <p className={css.habit_2_3}>Personal rate setting</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
