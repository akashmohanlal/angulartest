import { InjectionToken } from '@angular/core'

export const lookupListToken = new InjectionToken('lookupListToken')

export const lookupList = {
    priority: ['low', 'medium', 'high']
}