document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnex1').addEventListener('click', () => {
        let solution1 = document.getElementById('schwingungsdauer1').value;
        if (solution1.localeCompare('1,23') === 0) {
            document.getElementById('schwingungsdauer1').style.borderColor = 'green';
            document.getElementById('negfeedback1').style.display = 'none';
            document.getElementById('posfeedback1').style.display = 'block';
            document.getElementById('solbtn1').style.display = 'block';
        } else {
            document.getElementById('schwingungsdauer1').style.borderColor = 'red'
            document.getElementById('posfeedback1').style.display = 'none';
            document.getElementById('negfeedback1').style.display = 'block';
        }
    })
    document.getElementById('btnex2').addEventListener('click', () => {
        let solution2 = document.getElementById('pendellaenge2').value;
        console.log(solution2)
        if (solution2.localeCompare('0,64') === 0) {
            document.getElementById('pendellaenge2').style.borderColor = 'green';
            document.getElementById('negfeedback2').style.display = 'none'
            document.getElementById('posfeedback2').style.display = 'block';
            document.getElementById('solbtn2').style.display = 'block';
        } else {
            document.getElementById('pendellaenge2').style.borderColor = 'red';
            document.getElementById('posfeedback2').style.display = 'none'
            document.getElementById('negfeedback2').style.display = 'block';
        }
    })
})
