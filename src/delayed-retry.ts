import {retryWhen, delay, take} from 'rxjs/operators'

function delayedRetry({delay: d, count}: {delay: number; count: number}) {
  return retryWhen(errors =>
    errors.pipe(
      delay(d),
      take(count)
    )
  )
}

export default delayedRetry
