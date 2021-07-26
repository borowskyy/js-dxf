const DatabaseObject = require('./DatabaseObject')


class Arc extends DatabaseObject
{
    /**
     * @param {number} x1 - Center x
     * @param {number} y1 - Center y
     * @param {number} r - radius
     * @param {number} startAngle - degree
     * @param {number} endAngle - degree
     */
    constructor(x1, y1, z1, r, startAngle, endAngle, normal)
    {
        super(["AcDbEntity", "AcDbArc"])
        this.x1 = x1;
        this.y1 = y1;
        this.z1 = z1;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.normal = normal;
    }

    toDxfString()
    {
        //https://www.autodesk.com/techpubs/autocad/acadr14/dxf/line_al_u05_c.htm
        let s = `0\nARC\n`;
        s += super.toDxfString()
        s += `8\n${this.layer.name}\n`;
        if (this.normal) {
            s += `210\n${this.normal[0]}\n220\n${this.normal[1]}\n230\n${this.normal[2]}\n`;
        }
        s += `10\n${this.x1}\n20\n${this.y1}\n30\n${this.z1}\n`;
        s += `40\n${this.r}\n50\n${this.startAngle}\n51\n${this.endAngle}\n`;
        return s;
    }
}

module.exports = Arc;
