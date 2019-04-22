import {Observable} from 'rxjs'
import {filter, map} from 'rxjs/operators'

function compact() {
  return <T>(observable: Observable<T | undefined>): Observable<T> =>
    observable.pipe(
      filter(t => t != null),
      // map(identity as (t: T | undefined) => T)
      map(t => t!)
    )
}

export default compact
