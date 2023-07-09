import { getCategories } from '../api/categories/getCategories';
import { ClickCounter } from '../../components/click-counter';
import { TabGroup } from '../../components/tab-group';
import React from 'react';

export const metadata = {
  title: 'Nested Layouts',
};

export default async function Layout({ children }) {
  const categories = await getCategories({ parent: null });

  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="/layouts"
          items={[
            {
              text: 'Home',
            },
            ...categories.map((x) => ({
              text: x.name,
              slug: x.slug,
            })),
          ]}
        />

        <div className="self-start">
          <ClickCounter />
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
