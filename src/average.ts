import {Observable} from 'rxjs'
import {reduce, map} from 'rxjs/operators'

function average(): (source: Observable<number>) => Observable<number> {
  return (source: Observable<number>) =>
    source.pipe(
      reduce(
        ({sum, count}: {sum: number; count: number}, b: number) => ({
          sum: sum + b,
          count: count + 1
        }),
        {sum: 0, count: 0}
      ),
      map(({sum, count}) => sum / count)
    )
}

export default average
