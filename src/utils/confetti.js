import confetti from 'canvas-confetti'

export const launchConfetti = () => {
  var end = Date.now() + (1 * 1000)

  var colors = ['#C30AC7', '#FFFFFF'];

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 555,
      origin: { y: 0 },
      colors: colors
    })

    if (Date.now() < end) {
      requestAnimationFrame(frame)
    }
  }())
}
