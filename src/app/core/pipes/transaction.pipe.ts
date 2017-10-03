import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'attachment'
})
export class TransactionAttachmentPipe implements PipeTransform {
  public transform(attachements:any) {
    return attachements ? attachements.length : 0;
  }
}