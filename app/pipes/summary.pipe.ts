import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {
    
    transform(value: String, length : string) {
        
        
        var parsedLength = parseInt(length);
        
        var limit = isNaN(parsedLength) ?  50 : parsedLength;
        
        if(value) {
            return value.substring(0, limit) + '...';
        } 
    }
    
}