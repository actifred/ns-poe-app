import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFullName'
})
export class UserFullNamePipe implements PipeTransform {

  transform(userInfo: any): string {
    if (userInfo) {
      return userInfo.name.title + ' ' + userInfo.name.first + ' ' + userInfo.name.last;
    }
    return '';
  }

}
