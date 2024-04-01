

const PublishingSchedule = () => {
    return (
        <div className="container mx-auto my-10">
            <div className="text-center my-5 font-bold">
               <h3>Stay updated about when your favorite book will be published!!</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Book Name</th>
                            <th>Author Name</th>
                            <th>Publishing Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>The Midnight Library</td>
                            <td>Matt Haig</td>
                            <td>2024-08-07</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Project Hail Mary</td>
                            <td>Andy Weir</td>
                            <td>2024-09-14</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>4</th>
                            <td>The Night Circus</td>
                            <td>Erin Morgenstern</td>
                            <td>2024-10-29</td>
                        </tr>
                        <tr>
                            <th>5</th>
                            <td>The Name of the Wind</td>
                            <td>Patrick Rothfuss</td>
                            <td>2025-02-18</td>
                        </tr>
                        <tr>
                            <th>6</th>
                            <td>Circe</td>
                            <td>Madeline Miller</td>
                            <td>2025-04-16</td>
                        </tr>
                        <tr>
                            <th>7</th>
                            <td>The Martian</td>
                            <td>Andy Weir</td>
                            <td>2025-06-22</td>
                        </tr>
                        <tr>
                            <th>8</th>
                            <td>The Nightingale</td>
                            <td>Kristin Hannah</td>
                            <td>2025-10-03</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PublishingSchedule;