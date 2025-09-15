import { IconRuler } from '@/components/icons/icon-ruler'
import { IconWeight } from '@/components/icons/icon-weight'
import { Line } from '@/components/line'
import { FORM_FIELDS } from '../constants/imc'
import { withForm } from '../lib/form'
import { CalculatorLabel } from './calculator-label'
import { imcFormOpts } from './form-options'

export const CalculatorFields = withForm({
  ...imcFormOpts,
  render: ({ form }) => {
    return (
      <div className="flex flex-col gap-2 rounded-2xl bg-input-black-bg p-4 z-[1]">
        <div className="flex flex-col gap-2">
          <CalculatorLabel htmlFor="altura">
            <IconRuler /> Altura (m)
          </CalculatorLabel>
          <form.AppField name={FORM_FIELDS.altura}>
            {(field) => (
              <field.CalculatorInput
                id="altura"
                name={FORM_FIELDS.altura}
                aria-label="Altura en metros"
                placeholder="1.7"
              />
            )}
          </form.AppField>
        </div>
        <Line className="bg-[#353535]" />
        <div className="flex flex-col gap-2">
          <CalculatorLabel htmlFor="peso">
            <IconWeight /> Peso (kg)
          </CalculatorLabel>
          <form.AppField name={FORM_FIELDS.peso}>
            {(field) => (
              <field.CalculatorInput
                id="peso"
                name={FORM_FIELDS.peso}
                aria-label="Peso en kilogramos"
                placeholder="70"
              />
            )}
          </form.AppField>
        </div>
      </div>
    )
  }
})
