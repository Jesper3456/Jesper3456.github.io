document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnex1').addEventListener('click', () => {
        let solution = document.getElementById('schwingungsdauer1').value;
        console.log(solution)
        if (solution.localeCompare('1,23') === 0) {
            document.getElementById('schwingungsdauer1').style.borderColor = 'green';
        } else {
            document.getElementById('schwingungsdauer1').style.borderColor = 'red'
        }
    })
})
