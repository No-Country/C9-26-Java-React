import fs from 'fs'
import path from 'path'

import { beforeEach, describe, it, expect, vi } from 'vitest'
import { Window } from 'happy-dom'

import { ServiceCard } from '../src/components'

const html = path.join(process.cwd(), 'index.html')
const htmlContent = fs.readFileSync(html).toString()

const window = new Window()
const document = window.document

vi.stubGlobal('document', document)

beforeEach(() => {
    document.body.innerHTML = ''
    document.write(htmlContent)
})
describe('<ServiceCard />', () => {
    it('should show a service card', () => {
        expect(ServiceCard).toBeDefined()

    })
})
