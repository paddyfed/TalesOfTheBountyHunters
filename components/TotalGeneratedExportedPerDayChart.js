export default function TotalGeneratedExportedPerDayChart({
  startDate,
  endDate,
  exported,
  generated,
}) {
  return (
    <b>
      {startDate} {endDate} {exported} {generated}
    </b>
  );
}

{
  /* <section>
            <table>
              <thead>
                <tr>
                  <td>Date</td>
                  <td>Generated</td>
                  <td>Exported</td>
                  <td>01/04/2024</td>
                  <td>02/04/2024</td>
                  <td>03/04/2024</td>
                  <td>04/04/2024</td>
                  <td>05/04/2024</td>
                  <td>06/04/2024</td>
                  <td>07/04/2024</td>
                  <td>08/04/2024</td>
                  <td>09/04/2024</td>
                  <td>10/04/2024</td>
                  <td>11/04/2024</td>
                  <td>12/04/2024</td>
                  <td>13/04/2024</td>
                  <td>14/04/2024</td>
                  <td>15/04/2024</td>
                  <td>16/04/2024</td>
                  <td>17/04/2024</td>
                  <td>18/04/2024</td>
                  <td>19/04/2024</td>
                  <td>20/04/2024</td>
                  <td>21/04/2024</td>
                  <td>22/04/2024</td>
                  <td>23/04/2024</td>
                  <td>24/04/2024</td>
                  <td>25/04/2024</td>
                  <td>26/04/2024</td>
                  <td>27/04/2024</td>
                  <td>28/04/2024</td>
                  <td>29/04/2024</td>
                  <td>30/04/2024</td>
                </tr>
              </thead>
              <tbody>
                { {postData.generated.map((item) => {
                  return (
                    <tr>
                      <td>{item}</td>
                    </tr>
                  );
                })}

                {postData.exported.map((item) => {
                  return (
                    <tr>
                      <td>{item}</td>
                    </tr>
                  );
                })} }
              </tbody>
            </table>
          </section> */
}
