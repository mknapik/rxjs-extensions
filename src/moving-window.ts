import {merge, of, EMPTY, Observable} from 'rxjs'
import {scan, takeLast} from 'rxjs/operators'

function movingWindow<T>(
  count: number
): (source: Observable<T>) => Observable<Observable<T>> {
  return scan(
    (acc: Observable<T>, b: T) => merge(acc, of(b)).pipe(takeLast(count)),
    EMPTY
  )
}

export default movingWindow
