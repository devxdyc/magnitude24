"use client";

import { createClient } from "@/utils/supabase/client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";

interface Event {
  id: number;
  created_at: string;
  name: string;
  short_description: string;
  long_description: string;
  banner_url: string;
  square_url: string;
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
  venue: string;
  category: string;
  form_req: string;
  rules: string;
  guidlines: string;
  team_size: string;
  event_type: string;
  is_featured: boolean;
  category_name: string;
  event_head: string;
}

interface EditEventFormProps {
  event: Event;
}

const EditEventForm: React.FC<EditEventFormProps> = ({ event }) => {
  const [formData, setFormData] = useState<Event>({ ...event });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here

    const supabase = createClient();

    async function updateEvent() {
      const { data, error } = await supabase
        .from("events")
        .update({ ...formData })
        .eq("id", formData.id)
        .select();
      console.log(data, error);
    }
    updateEvent();

    console.log("Form data submitted:");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col w-[80vw] font-lg">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-primary-foreground"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full my-2 rounded-xl border border-muted  p-2 bg-transparent shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="short_description"
              className="block text-sm font-medium text-primary-foreground"
            >
              Short Description
            </label>
            <textarea
              name="short_description"
              value={formData.short_description}
              onChange={handleChange}
              className=" h-[200px]  mt-1 block w-full my-2 rounded-xl border border-muted  p-2 bg-transparent shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="long_description"
              className="block text-sm font-medium text-primary-foreground"
            >
              Long Description
            </label>
            <textarea
              name="long_description"
              value={formData.long_description}
              onChange={handleChange}
              className=" h-[200px]  mt-1 block w-full my-2 rounded-xl border border-muted  p-2 bg-transparent shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="banner_url"
              className="block text-sm font-medium text-primary-foreground"
            >
              Banner URL
            </label>
            <div className="flex justify-between">
              <input
                type="text"
                name="banner_url"
                value={formData.banner_url}
                onChange={handleChange}
                className="mt-1 block w-full my-2 rounded-xl border border-muted  p-2 bg-transparent shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              <img src={formData.banner_url} className="w-20 " />
            </div>
          </div>
          <div>
            <label
              htmlFor="square_url"
              className="block text-sm font-medium text-primary-foreground"
            >
              Square URL
            </label>
            <div className="flex justify-between">
              <input
                type="text"
                name="square_url"
                value={formData.square_url}
                onChange={handleChange}
                className="mt-1 block w-full my-2 rounded-xl border border-muted  p-2 bg-transparent shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              <img src={formData.banner_url} className="w-20 " />
            </div>
          </div>
          <div>
            <label
              htmlFor="start_date"
              className="block text-sm font-medium text-primary-foreground"
            >
              Start Date
            </label>
            <input
              type="date"
              name="start_date"
              value={formData.start_date}
              onChange={handleChange}
              className="mt-1 block w-full my-2 rounded-xl border border-muted  p-2 bg-transparent shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="end_date"
              className="block text-sm font-medium text-primary-foreground"
            >
              End Date
            </label>
            <input
              type="date"
              name="end_date"
              value={formData.end_date}
              onChange={handleChange}
              className="mt-1 block w-full my-2 rounded-xl border border-muted  p-2 bg-transparent shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="start_time"
              className="block text-sm font-medium text-primary-foreground"
            >
              Start Time
            </label>
            <input
              type="time"
              name="start_time"
              value={formData.start_time}
              onChange={handleChange}
              className="mt-1 block w-full my-2 rounded-xl border border-muted  p-2 bg-transparent shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="end_time"
              className="block text-sm font-medium text-primary-foreground"
            >
              End Time
            </label>
            <input
              type="time"
              name="end_time"
              value={formData.end_time}
              onChange={handleChange}
              className="mt-1 block w-full my-2 rounded-xl border border-muted  p-2 bg-transparent shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="venue"
              className="block text-sm font-medium text-primary-foreground"
            >
              Venue
            </label>
            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              className="mt-1 block w-full my-2 rounded-xl border border-muted  p-2 bg-transparent shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-primary-foreground"
            >
              Category
            </label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 block w-full my-2 rounded-xl border border-muted  p-2 bg-transparent shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="guidlines"
              className="block text-sm font-medium text-primary-foreground"
            >
              Guidelines
            </label>
            <input
              type="text"
              name="guidlines"
              value={formData.guidlines}
              onChange={handleChange}
              className="mt-1 block w-full my-2 rounded-xl border border-muted  p-2 bg-transparent shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="team_size"
              className="block text-sm font-medium text-primary-foreground"
            >
              Team Size
            </label>
            <input
              type="number"
              name="team_size"
              value={formData.team_size}
              onChange={handleChange}
              className="mt-1 block w-full my-2 rounded-xl border border-muted  p-2 bg-transparent shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="event_type"
              className="block text-sm font-medium text-primary-foreground"
            >
              Event Type
            </label>
            <input
              type="text"
              name="event_type"
              value={formData.event_type}
              onChange={handleChange}
              className="mt-1 block w-full my-2 rounded-xl border border-muted  p-2 bg-transparent shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex flex-row gap-2 my-3">
            <label
              htmlFor="is_featured"
              className="block text-sm font-medium text-primary-foreground"
            >
              Is Featured
            </label>
            <input
              type="checkbox"
              name="is_featured"
              checked={formData.is_featured}
              onChange={(e) =>
                setFormData({ ...formData, is_featured: e.target.checked })
              }
              className="mt-1 block rounded border border-muted  p-2 bg-transparent shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="category_name"
              className="block text-sm font-medium text-primary-foreground"
            >
              Category Name
            </label>
            <input
              type="text"
              name="category_name"
              value={formData.category_name}
              onChange={handleChange}
              className="mt-1 block w-full my-2 rounded-xl border border-muted  p-2 bg-transparent shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="event_head"
              className="block text-sm font-medium text-primary-foreground"
            >
              Event Head
            </label>
            <input
              type="text"
              name="event_head"
              value={formData.event_head}
              onChange={handleChange}
              className="mt-1 block w-full my-2 rounded-xl border border-muted  p-2 bg-transparent shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Changes
          </button>
        </div>
      </form>
    </>
  );
};

export default EditEventForm;
