import {Observable} from 'rxjs'
import {catchError} from 'rxjs/operators'

function tapCatch<E>(callback: (f: E) => void) {
  return <T>(source: Observable<T>): Observable<T> =>
    source.pipe(
      catchError(error => {
        callback(error)
        throw error
      })
    )
}

export default tapCatch
