import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'attachment'
})
class TransactionAttachmentPipe implements PipeTransform {
  public transform(attachements:any) {
    return attachements ? attachements.length : 0;
  }
}

export const pipes = [
  TransactionAttachmentPipe,
];