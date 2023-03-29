import { Component } from '@angular/core'
import { Resource } from '../shared/resource.model'

@Component({
    selector: 'app-resource',
    templateUrl: './resource.component.html',
    styleUrls: []
})

export class ResourceComponent {
    public resources = [
        new Resource({
            _id: '1',
            title: 'title 1',
            description: 'description 1',
            type: 'video',
            link: 'http://1.com'
        }),
        new Resource({
            _id: '2',
            title: 'title 2',
            description: 'description 2',
            type: 'blog',
            link: 'http://2.com'
        }),
        new Resource({
            _id: '3',
            title: 'title 3',
            description: 'description 3',
            type: 'image',
            link: 'http://3.com'
        })
    ]

    addResource () {
        let id = Math.random().toString(36).substr(2,9)
        const newResource = new Resource({
            _id: id,
            title: `title${id}`,
            description: `description${id}`,
            type: 'blog',
            link: `http://${id}`
        })
    }
}