import {of, EMPTY, defer} from 'rxjs'
import {map, delay, mergeMap, expand} from 'rxjs/operators'

function repeatUntil(fn: (trial: number) => PromiseLike<boolean>) {
  return mergeMap((value: boolean) => {
    return of({trial: 0, value}).pipe(
      expand(({value, trial}) => {
        return value
          ? EMPTY
          : defer(() => fn(trial)).pipe(
              mergeMap(value =>
                value
                  ? of({value, trial})
                  : of({value, trial: trial + 1}).pipe(delay(1000))
              )
            )
      }),
      map(({value}) => value)
    )
  })
}

export default repeatUntil
