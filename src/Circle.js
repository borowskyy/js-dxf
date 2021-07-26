const DatabaseObject = require('./DatabaseObject')


class Circle extends DatabaseObject
{
    /**
     * @param {number} x1 - Center x
     * @param {number} y1 - Center y
     * @param {number} r - radius
     */
    constructor(x1, y1, z1, r, normal)
    {
        super(["AcDbEntity", "AcDbCircle"])
        this.x1 = x1;
        this.y1 = y1;
        this.z1 = z1;
        this.r = r;
        this.normal = normal;
    }

    toDxfString()
    {
        //https://www.autodesk.com/techpubs/autocad/acadr14/dxf/circle_al_u05_c.htm
        let s = `0\nCIRCLE\n`;
        s += super.toDxfString()
        s += `8\n${this.layer.name}\n`;
        if (this.normal) {
            s += `210\n${this.normal[0]}\n220\n${this.normal[1]}\n230\n${this.normal[2]}\n`;
        }
        s += `10\n${this.x1}\n20\n${this.y1}\n30\n${this.z1}\n`;
        s += `40\n${this.r}\n`;
        return s;
    }
}

module.exports = Circle;
