export default function Footer({ year, copyright }) {
  return (
    <>
      <footer className="text-center">
        <div className="text-center p-4">
          <p>{`© ${year} Copyright: Wehigami`}</p>
        </div>
        <div className="text-center p4">
            <ul>
                {copyright.map(({ name, credit, id}) => {
                    return (
                        <li key={id} className="">
                            {name} by {credit}
                        </li>
                    )
                })}
            </ul>
        </div>
      </footer>
    </>
  );
}
