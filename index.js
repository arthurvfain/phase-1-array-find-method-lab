// function superbowlWin(arr)
// {
//     if (arr.find(year => year.result === `W`) === undefined)
//     {
//         return undefined;
//     }
//     else
//     {
//         return (arr.find(year => year.result === `W`)).year;

//     }
// }

function superbowlWin(arr)
{
    if (arr.find(year => year.result === `W`) !== undefined)
    {
        return (arr.find(year => year.result === `W`)).year;
    }
    else
    {
        return undefined;

    }
}