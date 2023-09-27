export const Statistics = ({stats, title}) => (
    <section >
        <h2 >{ title  }</h2>

  <ul >
            {stats.map(({ id,label, percentage}) => (
                <li key={id}>
                    <span>{label}</span>
                    <span>{percentage}</span>
                </li>))}
  </ul>
</section>
)






