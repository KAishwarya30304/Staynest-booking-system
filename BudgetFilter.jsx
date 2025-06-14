import React from 'react';
    import { Slider } from '@/components/ui/slider';
    import { Label } from '@/components/ui/label';

    const BudgetFilter = () => {
      const [budget, setBudget] = React.useState([1000, 5000]);
      const budgetTags = [
        { label: '💸 Budget Stays', range: [500, 1000] },
        { label: '💼 Mid-Range Comfort', range: [1001, 3000] },
        { label: '🏰 Luxury Experiences', range: [3001, 10000] },
      ];

      const getTagForBudget = (value) => {
        const midValue = (value[0] + value[1]) / 2;
        if (midValue <= 1000) return budgetTags[0].label;
        if (midValue <= 3000) return budgetTags[1].label;
        return budgetTags[2].label;
      };

      return (
        <div className="space-y-4 p-4 border rounded-lg bg-background shadow-sm">
          <div className="flex justify-between items-center">
            <Label htmlFor="budget-slider" className="text-lg font-semibold">Budget per night</Label>
            <span className="text-sm font-medium text-primary">{getTagForBudget(budget)}</span>
          </div>
          <Slider
            id="budget-slider"
            min={500}
            max={10000}
            step={100}
            value={budget}
            onValueChange={setBudget}
            className="my-4"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>₹{budget[0]}</span>
            <span>₹{budget[1]}</span>
          </div>
        </div>
      );
    };
    export default BudgetFilter;