// Components

const body = document.body
const stateLabel = document.getElementById('state')
const instructionLabel = document.getElementById('instruction')

// Functions

function triggerDetection() {
    body.classList.remove('ok')
    stateLabel.innerText = 'LEAVING DETECTED'
    instructionLabel.innerText = 'Reload page to reset'
    document.title = 'Spytab DETECTED'
}

function resetDetection() {
    body.classList.add('ok')
    stateLabel.innerText = 'OK'
    instructionLabel.innerText = 'Leave the page to trigger detection'

    document.title = 'Spytab OK'
}

// Events

document.addEventListener('visibilitychange', () => {
    console.log('Tab visibility changed to', document.visibilityState)
    triggerDetection()
})

document.addEventListener('mouseleave', (e) => {
    console.log('Mouse left the page at x:', e.clientX, "y:", e.clientY)
    triggerDetection()
})

window.addEventListener('blur', () => {
    console.log('Window lost focus')
    triggerDetection()
})

// On load

resetDetection()