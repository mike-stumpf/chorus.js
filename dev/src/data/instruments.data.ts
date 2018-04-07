import { InstrumentInterface, NoteConstant } from '../..';
import { InstrumentTypeConstant } from '../../constants/instrumentType.constant';
import * as _ from 'lodash';

export class InstrumentsData {
    public static getAvailableInstruments(): Promise<InstrumentInterface[]> {
        return new Promise((resolve, reject) => {
            const instruments: InstrumentInterface[] = [
                {
                    name:'Guitar',
                    rootNotes:[
                        NoteConstant.E,
                        NoteConstant.A,
                        NoteConstant.D,
                        NoteConstant.G,
                        NoteConstant.B,
                        NoteConstant.E
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Bass Guitar',
                    rootNotes:[
                        NoteConstant.E,
                        NoteConstant.A,
                        NoteConstant.D,
                        NoteConstant.G
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Bass Guitar - 5 String',
                    rootNotes:[
                        NoteConstant.E,
                        NoteConstant.A,
                        NoteConstant.D,
                        NoteConstant.G
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Violin',
                    rootNotes:[
                        NoteConstant.G,
                        NoteConstant.D,
                        NoteConstant.A,
                        NoteConstant.E
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Violin - Tenor',
                    rootNotes:[
                        NoteConstant.G,
                        NoteConstant.D,
                        NoteConstant.A,
                        NoteConstant.E
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Mandolin',
                    rootNotes:[
                        NoteConstant.G,
                        NoteConstant.D,
                        NoteConstant.A,
                        NoteConstant.E
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Ukulele - Baritone',
                    rootNotes:[
                        NoteConstant.D,
                        NoteConstant.G,
                        NoteConstant.B,
                        NoteConstant.E
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Ukulele - Concert',
                    rootNotes:[
                        NoteConstant.G,
                        NoteConstant.C,
                        NoteConstant.E,
                        NoteConstant.A
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Ukulele - Soprano',
                    rootNotes:[
                        NoteConstant.A,
                        NoteConstant.D,
                        NoteConstant.FG,
                        NoteConstant.B
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Ukulele - Tenor',
                    rootNotes:[
                        NoteConstant.G,
                        NoteConstant.C,
                        NoteConstant.E,
                        NoteConstant.A
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Cello',
                    rootNotes:[
                        NoteConstant.C,
                        NoteConstant.G,
                        NoteConstant.D,
                        NoteConstant.A
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Viola',
                    rootNotes:[
                        NoteConstant.C,
                        NoteConstant.G,
                        NoteConstant.D,
                        NoteConstant.A
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Banjo - Plectrum',
                    rootNotes:[
                        NoteConstant.C,
                        NoteConstant.G,
                        NoteConstant.B,
                        NoteConstant.D
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Banjo - Tenor (Jazz)',
                    rootNotes:[
                        NoteConstant.C,
                        NoteConstant.G,
                        NoteConstant.D,
                        NoteConstant.A
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Banjo - Tenor (Irish)',
                    rootNotes:[
                        NoteConstant.G,
                        NoteConstant.D,
                        NoteConstant.A,
                        NoteConstant.E
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Lyre',
                    rootNotes:[
                        NoteConstant.A,
                        NoteConstant.C,
                        NoteConstant.E,
                        NoteConstant.G,
                        NoteConstant.B,
                        NoteConstant.DE,
                        NoteConstant.FG,
                        NoteConstant.A
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Bajo Sexto',
                    rootNotes:[
                        NoteConstant.E,
                        NoteConstant.A,
                        NoteConstant.D,
                        NoteConstant.G,
                        NoteConstant.B,
                        NoteConstant.F
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Balalaika - Alto',
                    rootNotes:[
                        NoteConstant.A,
                        NoteConstant.A,
                        NoteConstant.D
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Balalaika - Soprano',
                    rootNotes:[
                        NoteConstant.E,
                        NoteConstant.E,
                        NoteConstant.A
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Cuatro',
                    rootNotes:[
                        NoteConstant.B,
                        NoteConstant.E,
                        NoteConstant.A,
                        NoteConstant.D,
                        NoteConstant.G
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Cuatro - Cubano',
                    rootNotes:[
                        NoteConstant.G,
                        NoteConstant.C,
                        NoteConstant.E,
                        NoteConstant.A
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Dulcimer',
                    rootNotes:[
                        NoteConstant.G,
                        NoteConstant.C,
                        NoteConstant.C,
                        NoteConstant.C
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Dulcimer (Alternative)',
                    rootNotes:[
                        NoteConstant.D,
                        NoteConstant.D,
                        NoteConstant.A,
                        NoteConstant.D
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Mandola',
                    rootNotes:[
                        NoteConstant.C,
                        NoteConstant.G,
                        NoteConstant.D,
                        NoteConstant.A
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Sitar',
                    rootNotes:[
                        NoteConstant.C,
                        NoteConstant.C,
                        NoteConstant.G,
                        NoteConstant.C,
                        NoteConstant.G,
                        NoteConstant.C,
                        NoteConstant.F
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Solo Bass',
                    rootNotes:[
                        NoteConstant.FG,
                        NoteConstant.B,
                        NoteConstant.E,
                        NoteConstant.A
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Dobro',
                    rootNotes:[
                        NoteConstant.G,
                        NoteConstant.B,
                        NoteConstant.D,
                        NoteConstant.G,
                        NoteConstant.B,
                        NoteConstant.D
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Guitarron',
                    rootNotes:[
                        NoteConstant.A,
                        NoteConstant.D,
                        NoteConstant.G,
                        NoteConstant.C,
                        NoteConstant.E,
                        NoteConstant.A
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Bouzouki',
                    rootNotes:[
                        NoteConstant.C,
                        NoteConstant.C,
                        NoteConstant.F,
                        NoteConstant.F,
                        NoteConstant.A,
                        NoteConstant.A,
                        NoteConstant.D,
                        NoteConstant.D
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Bouzouki (Alternative)',
                    rootNotes:[
                        NoteConstant.D,
                        NoteConstant.D,
                        NoteConstant.A,
                        NoteConstant.A,
                        NoteConstant.D,
                        NoteConstant.D
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Bouzouki - Irish',
                    rootNotes:[
                        NoteConstant.C,
                        NoteConstant.F,
                        NoteConstant.A,
                        NoteConstant.D
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Bouzouki - Irish (Alternative)',
                    rootNotes:[
                        NoteConstant.G,
                        NoteConstant.D,
                        NoteConstant.A,
                        NoteConstant.D
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Fiddle',
                    rootNotes:[
                        NoteConstant.G,
                        NoteConstant.D,
                        NoteConstant.A,
                        NoteConstant.E
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Vihuela',
                    rootNotes:[
                        NoteConstant.A,
                        NoteConstant.D,
                        NoteConstant.G,
                        NoteConstant.B,
                        NoteConstant.E
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Banduria',
                    rootNotes:[
                        NoteConstant.GA,
                        NoteConstant.CD,
                        NoteConstant.FG,
                        NoteConstant.B,
                        NoteConstant.E,
                        NoteConstant.A
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Charango',
                    rootNotes:[
                        NoteConstant.G,
                        NoteConstant.C,
                        NoteConstant.E,
                        NoteConstant.A,
                        NoteConstant.E
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Oud',
                    rootNotes:[
                        NoteConstant.G,
                        NoteConstant.A,
                        NoteConstant.B,
                        NoteConstant.E,
                        NoteConstant.A,
                        NoteConstant.D
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Oud (Alternative)',
                    rootNotes:[
                        NoteConstant.B,
                        NoteConstant.FG,
                        NoteConstant.B,
                        NoteConstant.E,
                        NoteConstant.A,
                        NoteConstant.D
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Requinto',
                    rootNotes:[
                        NoteConstant.A,
                        NoteConstant.D,
                        NoteConstant.G,
                        NoteConstant.C,
                        NoteConstant.E,
                        NoteConstant.A
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Lute',
                    rootNotes:[
                        NoteConstant.G,
                        NoteConstant.G,
                        NoteConstant.C,
                        NoteConstant.C,
                        NoteConstant.F,
                        NoteConstant.F,
                        NoteConstant.A,
                        NoteConstant.A,
                        NoteConstant.D,
                        NoteConstant.D,
                        NoteConstant.G,
                        NoteConstant.G
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Zither',
                    rootNotes:[
                        NoteConstant.A,
                        NoteConstant.A,
                        NoteConstant.D,
                        NoteConstant.G,
                        NoteConstant.C
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Guitar - Russian',
                    rootNotes:[
                        NoteConstant.D,
                        NoteConstant.G,
                        NoteConstant.B,
                        NoteConstant.D,
                        NoteConstant.G,
                        NoteConstant.B,
                        NoteConstant.D
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Pedal Steel Guitar',
                    rootNotes:[
                        NoteConstant.B,
                        NoteConstant.D,
                        NoteConstant.E,
                        NoteConstant.FG,
                        NoteConstant.GA,
                        NoteConstant.B,
                        NoteConstant.E,
                        NoteConstant.GA,
                        NoteConstant.DE,
                        NoteConstant.FG
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                },
                {
                    name:'Pedal Steel Guitar (Alternative)',
                    rootNotes:[
                        NoteConstant.C,
                        NoteConstant.F,
                        NoteConstant.A,
                        NoteConstant.C,
                        NoteConstant.E,
                        NoteConstant.G,
                        NoteConstant.A,
                        NoteConstant.C,
                        NoteConstant.E,
                        NoteConstant.D
                    ],
                    type:InstrumentTypeConstant.INSTRUMENT
                }
            ];
            const tunings:InstrumentInterface[] = [
                {
                    name:'Major Seconds',
                    rootNotes:[
                        NoteConstant.C,
                        NoteConstant.D,
                        NoteConstant.E,
                        NoteConstant.FG,
                        NoteConstant.G,
                        NoteConstant.AB
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Minor Thirds',
                    rootNotes:[
                        NoteConstant.C,
                        NoteConstant.DE,
                        NoteConstant.FG,
                        NoteConstant.A,
                        NoteConstant.C,
                        NoteConstant.DE
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Major Thirds',
                    rootNotes:[
                        NoteConstant.E,
                        NoteConstant.GA,
                        NoteConstant.C,
                        NoteConstant.E,
                        NoteConstant.GA,
                        NoteConstant.C
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'All Fourths',
                    rootNotes:[
                        NoteConstant.E,
                        NoteConstant.A,
                        NoteConstant.D,
                        NoteConstant.G,
                        NoteConstant.C,
                        NoteConstant.F
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Augmented Fourths',
                    rootNotes:[
                        NoteConstant.C,
                        NoteConstant.FG,
                        NoteConstant.C,
                        NoteConstant.FG,
                        NoteConstant.C,
                        NoteConstant.FG
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'All Fifths',
                    rootNotes:[
                        NoteConstant.C,
                        NoteConstant.G,
                        NoteConstant.D,
                        NoteConstant.A,
                        NoteConstant.E,
                        NoteConstant.B
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Baritone',
                    rootNotes:[
                        NoteConstant.B,
                        NoteConstant.E,
                        NoteConstant.A,
                        NoteConstant.D,
                        NoteConstant.FG,
                        NoteConstant.B
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Baritone (Alternative)',
                    rootNotes:[
                        NoteConstant.A,
                        NoteConstant.D,
                        NoteConstant.G,
                        NoteConstant.C,
                        NoteConstant.E,
                        NoteConstant.A
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Hawaiian',
                    rootNotes:[
                        NoteConstant.E,
                        NoteConstant.A,
                        NoteConstant.E,
                        NoteConstant.A,
                        NoteConstant.CD,
                        NoteConstant.E
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'New Standard',
                    rootNotes:[
                        NoteConstant.C,
                        NoteConstant.G,
                        NoteConstant.D,
                        NoteConstant.A,
                        NoteConstant.E,
                        NoteConstant.G
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Resophonic',
                    rootNotes:[
                        NoteConstant.G,
                        NoteConstant.B,
                        NoteConstant.D,
                        NoteConstant.G,
                        NoteConstant.B,
                        NoteConstant.D
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Tenor',
                    rootNotes:[
                        NoteConstant.C,
                        NoteConstant.G,
                        NoteConstant.D,
                        NoteConstant.A
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Open A',
                    rootNotes:[
                        NoteConstant.E,
                        NoteConstant.A,
                        NoteConstant.CD,
                        NoteConstant.E,
                        NoteConstant.A,
                        NoteConstant.E
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Open B',
                    rootNotes:[
                        NoteConstant.B,
                        NoteConstant.FG,
                        NoteConstant.B,
                        NoteConstant.FG,
                        NoteConstant.B,
                        NoteConstant.DE
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Open C',
                    rootNotes:[
                        NoteConstant.C,
                        NoteConstant.G,
                        NoteConstant.C,
                        NoteConstant.G,
                        NoteConstant.C,
                        NoteConstant.E
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Open D',
                    rootNotes:[
                        NoteConstant.D,
                        NoteConstant.A,
                        NoteConstant.D,
                        NoteConstant.FG,
                        NoteConstant.A,
                        NoteConstant.D
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Modal D',
                    rootNotes:[
                        NoteConstant.D,
                        NoteConstant.A,
                        NoteConstant.D,
                        NoteConstant.G,
                        NoteConstant.A,
                        NoteConstant.D
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Open D Minor',
                    rootNotes:[
                        NoteConstant.D,
                        NoteConstant.A,
                        NoteConstant.D,
                        NoteConstant.F,
                        NoteConstant.A,
                        NoteConstant.D
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Open E',
                    rootNotes:[
                        NoteConstant.E,
                        NoteConstant.B,
                        NoteConstant.E,
                        NoteConstant.GA,
                        NoteConstant.B,
                        NoteConstant.E
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Open F',
                    rootNotes:[
                        NoteConstant.F,
                        NoteConstant.A,
                        NoteConstant.C,
                        NoteConstant.F,
                        NoteConstant.A,
                        NoteConstant.C
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Open G',
                    rootNotes:[
                        NoteConstant.D,
                        NoteConstant.G,
                        NoteConstant.D,
                        NoteConstant.G,
                        NoteConstant.B,
                        NoteConstant.D
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Modal G',
                    rootNotes:[
                        NoteConstant.D,
                        NoteConstant.G,
                        NoteConstant.D,
                        NoteConstant.G,
                        NoteConstant.B,
                        NoteConstant.D
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Open G Minor',
                    rootNotes:[
                        NoteConstant.E,
                        NoteConstant.A,
                        NoteConstant.CD,
                        NoteConstant.E,
                        NoteConstant.A,
                        NoteConstant.E
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Admiral',
                    rootNotes:[
                        NoteConstant.C,
                        NoteConstant.G,
                        NoteConstant.D,
                        NoteConstant.G,
                        NoteConstant.B,
                        NoteConstant.C
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Buzzard',
                    rootNotes:[
                        NoteConstant.C,
                        NoteConstant.F,
                        NoteConstant.C,
                        NoteConstant.G,
                        NoteConstant.AB,
                        NoteConstant.F
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Face',
                    rootNotes:[
                        NoteConstant.C,
                        NoteConstant.G,
                        NoteConstant.D,
                        NoteConstant.G,
                        NoteConstant.A,
                        NoteConstant.D
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Four and Twenty',
                    rootNotes:[
                        NoteConstant.D,
                        NoteConstant.A,
                        NoteConstant.D,
                        NoteConstant.D,
                        NoteConstant.A,
                        NoteConstant.D
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Hot Type',
                    rootNotes:[
                        NoteConstant.A,
                        NoteConstant.B,
                        NoteConstant.E,
                        NoteConstant.FG,
                        NoteConstant.A,
                        NoteConstant.D
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Layover',
                    rootNotes:[
                        NoteConstant.D,
                        NoteConstant.A,
                        NoteConstant.C,
                        NoteConstant.G,
                        NoteConstant.C,
                        NoteConstant.E
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Magic Farmer',
                    rootNotes:[
                        NoteConstant.C,
                        NoteConstant.F,
                        NoteConstant.C,
                        NoteConstant.G,
                        NoteConstant.A,
                        NoteConstant.E
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Pelican',
                    rootNotes:[
                        NoteConstant.D,
                        NoteConstant.A,
                        NoteConstant.D,
                        NoteConstant.E,
                        NoteConstant.A,
                        NoteConstant.D
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Processional',
                    rootNotes:[
                        NoteConstant.D,
                        NoteConstant.G,
                        NoteConstant.D,
                        NoteConstant.F,
                        NoteConstant.A,
                        NoteConstant.AB
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Slow Motion',
                    rootNotes:[
                        NoteConstant.D,
                        NoteConstant.G,
                        NoteConstant.D,
                        NoteConstant.F,
                        NoteConstant.C,
                        NoteConstant.D
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Spirit',
                    rootNotes:[
                        NoteConstant.CD,
                        NoteConstant.A,
                        NoteConstant.CD,
                        NoteConstant.GA,
                        NoteConstant.A,
                        NoteConstant.E
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Tarboulton',
                    rootNotes:[
                        NoteConstant.C,
                        NoteConstant.AB,
                        NoteConstant.C,
                        NoteConstant.F,
                        NoteConstant.AB,
                        NoteConstant.F
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Toulouse',
                    rootNotes:[
                        NoteConstant.E,
                        NoteConstant.C,
                        NoteConstant.D,
                        NoteConstant.F,
                        NoteConstant.A,
                        NoteConstant.D
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Triqueen',
                    rootNotes:[
                        NoteConstant.D,
                        NoteConstant.G,
                        NoteConstant.D,
                        NoteConstant.FG,
                        NoteConstant.A,
                        NoteConstant.B
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Minor Sixths',
                    rootNotes:[
                        NoteConstant.C,
                        NoteConstant.GA,
                        NoteConstant.E,
                        NoteConstant.C,
                        NoteConstant.GA,
                        NoteConstant.E
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Major Sixths',
                    rootNotes:[
                        NoteConstant.C,
                        NoteConstant.A,
                        NoteConstant.FG,
                        NoteConstant.DE,
                        NoteConstant.C,
                        NoteConstant.A
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Mandoguitar',
                    rootNotes:[
                        NoteConstant.C,
                        NoteConstant.G,
                        NoteConstant.D,
                        NoteConstant.A,
                        NoteConstant.E,
                        NoteConstant.B
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Pentatonic',
                    rootNotes:[
                        NoteConstant.A,
                        NoteConstant.C,
                        NoteConstant.D,
                        NoteConstant.E,
                        NoteConstant.G,
                        NoteConstant.A
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Overtone',
                    rootNotes:[
                        NoteConstant.C,
                        NoteConstant.E,
                        NoteConstant.G,
                        NoteConstant.AB,
                        NoteConstant.C,
                        NoteConstant.D
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Lefty',
                    rootNotes:[
                        NoteConstant.E,
                        NoteConstant.B,
                        NoteConstant.G,
                        NoteConstant.D,
                        NoteConstant.A,
                        NoteConstant.E
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Cittern',
                    rootNotes:[
                        NoteConstant.C,
                        NoteConstant.F,
                        NoteConstant.C,
                        NoteConstant.G,
                        NoteConstant.C,
                        NoteConstant.D
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Cittern (Alternative)',
                    rootNotes:[
                        NoteConstant.C,
                        NoteConstant.G,
                        NoteConstant.C,
                        NoteConstant.G,
                        NoteConstant.C,
                        NoteConstant.G
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                },
                {
                    name:'Balalaika',
                    rootNotes:[
                        NoteConstant.E,
                        NoteConstant.A,
                        NoteConstant.D,
                        NoteConstant.E,
                        NoteConstant.E,
                        NoteConstant.A
                    ],
                    type:InstrumentTypeConstant.ALTERNATE_TUNING
                }
            ];
            // sort the list alphabetically
            const availableInstruments: InstrumentInterface[] = _.sortBy(
                // use auto-incremented ids to prevent developer error
                _.map(
                    // join the lists together
                    _.union(instruments, tunings),
                    (instrument: InstrumentInterface, index: number) => {
                        return {
                            ...instrument, id: (index + 1) // start from NoteConstant.AB instead of NoteConstant.A
                        }
                    }
                ),
                'name');
            resolve(availableInstruments);
        });
    }
}