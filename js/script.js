document.getElementById('btnex1').addEventListener('click', () => {
    let solution = document.getElementById('schwingungsdauer1').innerHTML;
    if (solution.localeCompare('1,23')) {
        document.getElementById('schwingungsdauer1').style.borderColor = 'green';
    } else {
        document.getElementById('schwingungsdauer1').style.borderColor = 'red'
    }
})