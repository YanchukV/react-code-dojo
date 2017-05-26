import React from 'react';

function Stats (props){
    return(

        <table className="stats">
            <tbody>
            <tr>
                <th>Всего задач</th>
                <td>3</td>
            </tr>
            <tr>
                <th>Выполнено:</th>
                <td>1</td>
            </tr>
            <tr>
                <th>Осталось:</th>
                <td>2</td>
            </tr>
            </tbody>
        </table>

    );
}

export default Stats;